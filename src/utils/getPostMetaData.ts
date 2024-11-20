import { connectDB } from '@/db/db';
import { PostPreviewRes } from '@/models/posts';
import { ObjectId } from 'mongodb';

const getPostMetaData = async (postId: string) => {
  const db = (await connectDB).db(process.env.MONGODB_COLLECTION_NAME);
  const result = await db
    .collection<PostPreviewRes>('post-preview')
    .findOne({ postId: new ObjectId(postId) });

  return result;
};

export default getPostMetaData;
