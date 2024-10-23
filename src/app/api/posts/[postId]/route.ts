import { connectDB } from '@/db/db';
import { PostRes } from '@/models/posts';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
  params: {
    postId: string;
  };
}

export async function GET(req: NextRequest, { params }: Params) {
  const postId = params.postId;

  const db = (await connectDB).db(process.env.MONGODB_COLLECTION_NAME);

  const result = await db
    .collection<PostRes>('posts')
    .findOne({ _id: new ObjectId(postId) });

  return NextResponse.json({ result }, { status: 200 });
}
