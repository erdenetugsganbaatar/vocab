import { MutationResolvers } from "@/generated/graphql";
import { prisma } from "@/lib/prisma";

export const addVocab: MutationResolvers["addVocab"] = async (
  _parent,
  args,
  _contextValue,
  _info
) => {
  const { word, examples, translations } = args;

  return await prisma.vocab.create({
    data: {
      word,
      examples: examples ?? [],
      translations: translations ?? [],
    },
  });
};
