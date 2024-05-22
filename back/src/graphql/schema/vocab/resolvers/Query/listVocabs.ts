import type { QueryResolvers } from './../../../types.generated';
import { VocabModel } from '@/db/mongoose/vocab';

export const listVocabs: NonNullable<QueryResolvers['listVocabs']> = async (_parent, _arg, _ctx) => {
  const docs = await VocabModel.find();
  return docs;
};
