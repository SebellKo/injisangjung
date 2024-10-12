import { MongoClient } from 'mongodb';

const url = `mongodb+srv://fulfilled7418:${process.env.MONGODB_SECRET_KEY}@injisangjung.khes1.mongodb.net/?retryWrites=true&w=majority&appName=injisangjung`;
const options: any = { useNewUrlParser: true };
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
