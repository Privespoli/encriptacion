import { findAllUsers } from '../models/user.model.js';

export const registerService = async () => {
  const result = await findAllUsers();
  return result;
};
