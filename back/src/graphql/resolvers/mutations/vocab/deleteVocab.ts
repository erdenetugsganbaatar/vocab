import { MutationResolvers } from "@/generated/graphql";
import { useUser } from "@/helpers/scope";
import { prisma } from "@/lib/prisma";
import { useResolver } from "@/lib/resolver";

export const deleteVocab: MutationResolvers["deleteVocab"] = useResolver(
  async ({ args, context }) => {
    const { id } = args;

    const user = await useUser(context.user);

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
  }
);
