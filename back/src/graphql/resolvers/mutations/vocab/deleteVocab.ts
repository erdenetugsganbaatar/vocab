import { MutationResolvers } from "@/generated/graphql";
import { useUser } from "@/helpers/scope";
import { prisma } from "@/lib/prisma";

export const deleteVocab: MutationResolvers["deleteVocab"] = async (
  _root,
  args,
  contextValue
) => {
  const { id } = args;

  const user = await useUser(contextValue.user);

  try {
    const result = await prisma.vocab.delete({
      where: { id, userId: user.id },
    });

    return result.id;
  } catch (e) {
    // TODO: handle error accordingly
    console.error(e);
  }
  return null;
};
