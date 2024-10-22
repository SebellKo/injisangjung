import { connectDB } from '@/db/db';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

interface PostRes {
  id: string;
  order: number;
  title: string;
  content: string;
  category: string;
}

export async function GET() {
  const db = (await connectDB).db(process.env.MONGODB_NAME);
  const result = await db.collection<PostRes>('post-preview').find().toArray();

  return NextResponse.json(result, { status: 200 });
}

export async function POST(req: NextRequest) {
  const receivedToken = req.headers.get('Authorization')?.split(' ')[1];

  if (!receivedToken)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const decoded = jwt.verify(
      receivedToken,
      process.env.TOKEN_SECRET_KEY as string
    );

    const db = (await connectDB).db(process.env.MONGODB_NAME);
    const body = await req.json();

    const date = new Date();

    const postData = {
      category: body.category,
      content: body.postContent,
      date: date,
      title: body.title,
    };

    const post = await db.collection('posts').insertOne(postData);

    const postId = post.insertedId;

    const postPreviewData = {
      postId: postId,
      title: body.title,
      desc: body.desc,
      previewUrl: body.previewUrl,
      category: body.category,
      date: date,
    };

    await db.collection('post-preview').insertOne(postPreviewData);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }
}
