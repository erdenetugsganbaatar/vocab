import { prisma } from "@/lib/prisma";

export const listUsers = async () => {
  const docs = await prisma.user.findMany();

  return docs;
};
