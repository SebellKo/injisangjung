import { connectDB } from '@/db/db';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const postId = searchParams.get('postId')!;
  const category = searchParams.get('category');
  let currentPage =
    searchParams.get('currentPage') === 'null'
      ? null
      : Number(searchParams.get('currentPage'));

  const postsPerPage = 5;

  const db = (await connectDB).db(process.env.MONGODB_NAME);
  const postPreviews = await db
    .collection('post-preview')
    .find({ category: category })
    .toArray();

  const postIdIndex = postPreviews.findIndex((postItem) => {
    return postItem.postId.equals(new ObjectId(postId));
  });

  if (currentPage === null) {
    currentPage = Math.floor(postIdIndex / postsPerPage);
  }

  const startIndex = currentPage * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const paginatedPostPreviews = postPreviews.slice(startIndex, endIndex);

  const totalPage =
    postPreviews.length % postsPerPage === 0
      ? Math.floor(postPreviews.length / postsPerPage)
      : Math.floor(postPreviews.length / postsPerPage) + 1;

  return NextResponse.json({
    postPreviews: paginatedPostPreviews,
    currentPage: currentPage,
    totalPost: postPreviews.length,
    totalPage: totalPage,
  });
}
