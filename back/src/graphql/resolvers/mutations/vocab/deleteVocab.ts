import { MutationResolvers } from "@/generated/graphql";
import { prisma } from "@/lib/prisma";

export const deleteVocab: MutationResolvers["deleteVocab"] = async (
  _root,
  args
) => {
  const { id } = args;

  const result = await prisma.vocabs.delete({ where: { id } });
  return result.id;
};
