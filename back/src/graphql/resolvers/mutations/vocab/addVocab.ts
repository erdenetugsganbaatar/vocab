import { VocabModel } from '@/db/mongoose/vocab';

// TODO: tugsuu - create lib function to support types to resolvers
export const addVocab = async (_parent: any, args: any, _contextValue: any, _info: any) => {
  const { word, examples, translations } = args;
  return await VocabModel.create({
    word,
    examples,
    translations,
  });
};
