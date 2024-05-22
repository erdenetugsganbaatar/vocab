import type { MutationResolvers } from './../../../types.generated';
import { VocabModel } from '@/db/mongoose/vocab';

export const addVocab: NonNullable<MutationResolvers['addVocab']> = async (_parent, arg, _ctx) => {
  const { word, examples, translations } = arg;
  return await VocabModel.create({
    word,
    examples,
    translations,
  });
};
