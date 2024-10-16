import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';

const bucket = process.env.AWS_BUCKET;

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.AWS_SECRET_KEY as string,
  },
});

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const files = formData.getAll('image') as File[];
  const body = (await files[0].arrayBuffer()) as Buffer;

  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: files[0].name,
      Body: body,
      ContentType: 'image/*',
    })
  );

  const encodedFileName = encodeURIComponent(files[0].name);
  const imageUrl = `https://${bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${encodedFileName}`;

  return NextResponse.json({ ok: true, url: imageUrl }, { status: 200 });
}
