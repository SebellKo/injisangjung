import { ERROR_MESSAGE } from '@/constant/message';
import { connectDB } from '@/db/db';
import { AdminRes } from '@/models/admin';
import { createToken } from '@/utils/createToken';
import { getHashPassword } from '@/utils/encryption';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { id, password } = await req.json();

    const db = (await connectDB).db(process.env.MONGODB_COLLECTION_NAME);
    const admin = await db.collection<AdminRes>('admin').findOne({ id: id });

    if (admin) {
      const { salt, pwd, _id } = admin;

      const isAdmin = getHashPassword(password, salt) === pwd;

      if (!isAdmin)
        return NextResponse.json(
          { message: ERROR_MESSAGE.notFound },
          { status: 404 }
        );

      if (isAdmin) {
        const token = createToken(String(_id), 'access', '12h');

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
      { message: ERROR_MESSAGE.notFound },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: ERROR_MESSAGE.internalError,
      },
      { status: 500 }
    );
  }
}
