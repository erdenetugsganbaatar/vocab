import { UserModel } from '@/db/mongoose/user';
import type { QueryResolvers } from './../../../types.generated';

export const listUsers: NonNullable<QueryResolvers['listUsers']> = async (_parent, _arg, _ctx) => {
  const docs = await UserModel.find();
  return docs;
};
