import { VocabModel } from '@/db/mongoose/vocab';
import { MutationResolvers } from '@/generated/graphql';

export const addVocab: MutationResolvers["addVocab"] = async (_parent, args, _contextValue, _info) => {
  const { word, examples, translations } = args;
  
  return await VocabModel.create({
    word,
    examples,
    translations,
  });
};
