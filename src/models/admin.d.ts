export interface AdminRes {
  _id: ObjectId;
  id: string;
  pwd: string;
  salt: string;
  accessToken: string;
}
