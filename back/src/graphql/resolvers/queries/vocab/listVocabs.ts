import { VocabModel } from '@/db/mongoose/vocab';

export const listVocabs = async () => {
  return await VocabModel.find();
};
