import { TestModel } from '@/db/model/test';

export const example = async () => {
  const doc = await TestModel.create({
    testField: 'test',
  });

  return 'success';
};
