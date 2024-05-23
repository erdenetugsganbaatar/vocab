import { UserModel } from '@/db/mongoose/user';

export const listUsers = async () => {
  const docs = await UserModel.find();
  return docs;
};
