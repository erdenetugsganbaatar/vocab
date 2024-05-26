import { MutationResolvers } from "@/generated/graphql";
import { useUser } from "@/helpers/scope";
import { prisma } from "@/lib/prisma";

export const addVocab: MutationResolvers["addVocab"] = async (
  _parent,
  args,
  contextValue,
  _info
) => {
  const { word, examples, translations } = args;

  const user = await useUser(contextValue.user);

  try {
    return await prisma.vocab.create({
      data: {
        word,
        examples: examples ?? [],
        translations: translations ?? [],
        userId: user.id,
      },
    });
  } catch (e) {
    console.error(e);
    // TODO: handle error
  }
  return null;
};
