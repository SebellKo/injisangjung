import { connectDB } from '@/db/db';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';

interface PostRes {
  id: string;
  order: number;
  title: string;
  content: string;
  category: string;
}

const bucket = process.env.AWS_BUCKET;

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.AWS_SECRET_KEY as string,
  },
});

export async function GET() {
  const db = (await connectDB).db('injisangjung');
  const result = await db.collection<PostRes>('posts').find().toArray();

  return NextResponse.json(result, { status: 200 });
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = formData.getAll('image') as File[];
  const body = (await files[0].arrayBuffer()) as Buffer;

  const result = await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: files[0].name,
      Body: body,
      ContentType: 'image/*',
    })
  );

  console.log(result);

  return NextResponse.json({ ok: true });
}
