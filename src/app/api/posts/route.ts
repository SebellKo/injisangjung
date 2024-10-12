import { connectDB } from '@/db/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

interface PostRes {
  id: string;
  order: number;
  title: string;
  content: string;
  category: string;
}

export async function GET() {
  const db = (await connectDB).db('injisangjung');
  const result = await db.collection<PostRes>('posts').find().toArray();

  return NextResponse.json(result, { status: 200 });
}

export async function POST(req: NextApiRequest) {
  {
    return NextResponse.json({ ok: true });
  }
}
