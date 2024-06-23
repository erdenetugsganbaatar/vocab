import { prisma } from "@/lib/prisma";
import { UserTokenPayload } from "@/types/user";

export const useUser = async (userTokenPayload?: UserTokenPayload | null) => {
  if (userTokenPayload == null || userTokenPayload.id == null) {
    // TODO: use custom error in order to handle it on formatError of ApolloServer constructor
    throw new Error("not authenticated");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userTokenPayload.id,
    },
  });

  if (user == null) {
    throw new Error("not authenticated");
  }

  return user;
};
