import { prisma } from "@/lib/prisma";

export const listVocabs = async () => {
  return await prisma.vocabs.findMany();
};
