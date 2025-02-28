import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { ERROR_MESSAGE } from '@/constant/message';

const bucket = process.env.AWS_BUCKET;

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.INJISANGJUNG_AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.INJISANGJUNG_AWS_SECRET_KEY as string,
  },
});

export async function POST(req: NextRequest) {
  const receivedToken = req.headers.get('Authorization')?.split(' ')[1];

  if (!receivedToken)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const decoded = jwt.verify(
      receivedToken,
      process.env.INJISANGJUNG_TOKEN_SECRET_KEY as string
    );

    const formData = await req.formData();
    const files = formData.getAll('image') as File[];
    const body = Buffer.from(await files[0].arrayBuffer());

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
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: ERROR_MESSAGE.invalid }, { status: 403 });
  }
}
