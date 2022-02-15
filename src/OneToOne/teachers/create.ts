import { prisma } from "../../connectionPrisma";

async function main() {
  const result = await prisma.teachers.create({
    data: {
      name: "Diego Fernandes",
    },
  });

  console.log(result)
}

main();
