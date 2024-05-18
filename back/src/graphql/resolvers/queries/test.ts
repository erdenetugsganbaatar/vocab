import { TestModel } from '@/db/mongoose/test';

export const example = async () => {
  const docs = await TestModel.find();
  return docs;
};
