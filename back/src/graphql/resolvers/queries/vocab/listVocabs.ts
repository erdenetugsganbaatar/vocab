import { QueryResolvers } from "@/generated/graphql";
import { useUser } from "@/helpers/scope";
import { prisma } from "@/lib/prisma";

export const listVocabs: QueryResolvers["listVocabs"] = async (
  _parent,
  _args,
  contextValue
) => {
  const user = await useUser(contextValue.user);

  try {
    return await prisma.vocab.findMany({
      where: {
        userId: user.id,
      },
    });
  } catch (e) {
    console.error(e);
    // TODO: handle error
  }
  return null;
};
