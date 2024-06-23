import { QueryResolvers } from "@/generated/graphql";
import { useUser } from "@/helpers/scope";
import { prisma } from "@/lib/prisma";
import { useResolver } from "@/lib/resolver";

export const listVocabs: QueryResolvers["listVocabs"] = useResolver(
  async ({ context }) => {
    const user = await useUser(context.user);

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
  }
);
