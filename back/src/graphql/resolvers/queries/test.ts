import { TestModel } from '@/db/model/test';

export const example = async () => {
  const docs = await TestModel.find();
  return docs;
};
