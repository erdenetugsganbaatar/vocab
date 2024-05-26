import { prisma } from "@/lib/prisma";

export const listVocabs = async () => {
  return await prisma.vocab.findMany();
};
