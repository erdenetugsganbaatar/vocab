import { prisma } from "@/lib/prisma";
import { useResolver } from "@/lib/resolver";

export const listUsers = useResolver(async () => {
  const docs = await prisma.user.findMany();

  return docs;
});
