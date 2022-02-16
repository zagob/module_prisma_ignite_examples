import { Prisma, Modules } from "@prisma/client";
import { prisma } from "../connectionPrisma";

async function main() {
  const result = await prisma.$queryRaw<Modules[]>(
    Prisma.sql`SELECT * FROM MODULES`
  );

  console.log(result);
}

main();
