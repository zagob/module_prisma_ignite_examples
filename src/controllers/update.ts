import { prisma } from "../connectionPrisma";

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "711942ef-11f8-4d0b-9bf4-a8e4a87232d9",
    },
    data: {
      duration: 300,
      description: "Curso de NodeJS com Dani Leao",
    },
  });

  console.log(result);
}

main();
