import { prisma } from "../../connectionPrisma";

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura limpa",
      author_id: "f3241fa9-0cd3-468a-8d20-6b925054ee88",
    },
  });

  console.log(result);
}

main();
