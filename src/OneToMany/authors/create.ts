import { prisma } from "../../connectionPrisma";

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Mayk Brito",
      books: {
        createMany: {
          data: [
            {
              name: "Como começar na programação",
            },
            {
              name: "Como ser produtivo",
            },
          ],
        },
      },
    },
  });

  console.log(result);
}

main();
