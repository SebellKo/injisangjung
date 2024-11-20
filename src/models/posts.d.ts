import { ObjectId } from 'mongodb';

export interface PostRes {
  _id: ObjectId;
  category: string;
  content: string;
  date: Date;
  title: string;
}

export interface PostPreviewRes {
  _id: ObjectId;
  postId: ObjectId;
  title: string;
  desc: string;
  previewUrl: string;
  category: string;
  date: Date;
}
