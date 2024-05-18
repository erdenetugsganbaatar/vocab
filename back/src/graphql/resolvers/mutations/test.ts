import { TestModel } from '@/db/mongoose/test';

export const example = async () => {
  const doc = await TestModel.create({
    testField: 'test',
  });

  return 'success';
};
