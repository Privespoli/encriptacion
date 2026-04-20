import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connection successful');
  } catch (error) {
    console.log('MongoDB connection failed: ', error);
  }
};
