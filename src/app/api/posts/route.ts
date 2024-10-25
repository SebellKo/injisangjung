import { ERROR_MESSAGE } from '@/constant/message';
import { connectDB } from '@/db/db';
import { NextResponse } from 'next/server';

interface PostRes {
  id: string;
  order: number;
  title: string;
  content: string;
  category: string;
}

export async function GET() {
  try {
    const db = (await connectDB).db(process.env.MONGODB_COLLECTION_NAME);
    const result = await db
      .collection<PostRes>('post-preview')
      .find()
      .toArray();

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: ERROR_MESSAGE.internalError },
      { status: 500 }
    );
  }
}
