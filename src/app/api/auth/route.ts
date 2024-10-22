import { connectDB } from '@/db/db';
import { AdminRes } from '@/models/admin';
import { createToken } from '@/utils/createToken';
import { getHashPassword } from '@/utils/encryption';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { id, password } = await req.json();

    const db = (await connectDB).db(process.env.MONGODB_NAME);
    const admin = await db.collection<AdminRes>('admin').findOne({ id: id });

    if (admin) {
      const { salt, pwd, _id } = admin;

      const isAdmin = getHashPassword(password, salt) === pwd;

      if (isAdmin) {
        const token = createToken(_id, 'access', '12h');

        await db
          .collection('admin')
          .updateOne({ id: id }, { $set: { accessToken: token } });

        return NextResponse.json(
          {
            accessToken: token,
          },
          {
            status: 200,
          }
        );
      }
    }

    return NextResponse.json(
      { message: '일치하는 사용자를 찾을수 없습니다.' },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: '서버오류가 발생했습니다.',
      },
      { status: 500 }
    );
  }
}
