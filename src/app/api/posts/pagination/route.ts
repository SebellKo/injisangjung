import { ERROR_MESSAGE } from '@/constant/message';
import { connectDB } from '@/db/db';
import { PostPreviewRes } from '@/models/posts';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const postId = searchParams.get('postId')!;
    const category = searchParams.get('category')!;
    let currentPage =
      searchParams.get('currentPage') === 'null'
        ? null
        : Number(searchParams.get('currentPage'));

    const postsPerPage = 5;

    const db = (await connectDB).db(process.env.MONGODB_COLLECTION_NAME);
    const postPreviews = await db
      .collection<PostPreviewRes>('post-preview')
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
  } catch (error) {
    return NextResponse.json(
      { error: ERROR_MESSAGE.internalError },
      { status: 500 }
    );
  }
}
