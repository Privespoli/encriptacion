import mongoose from 'mongoose';
import { dbConfig } from '../config/db.config.js';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const userModel = mongoose.model('users', userSchema);

export const findAllUsers = async () => {
  await dbConfig();
  return { message: 'userModel works!', db: 'connected' };
};

export default userModel;
