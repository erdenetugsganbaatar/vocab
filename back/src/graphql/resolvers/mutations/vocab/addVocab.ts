import { MutationResolvers } from "@/generated/graphql";
import { useUser } from "@/helpers/scope";
import { prisma } from "@/lib/prisma";
import { useResolver } from "@/lib/resolver";

export const addVocab: MutationResolvers["addVocab"] = useResolver(
  async ({ args, context }) => {
    const { word, examples, translations } = args;

    const user = await useUser(context.user);

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
  }
);
