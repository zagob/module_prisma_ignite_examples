import { prisma } from "../../connectionPrisma";

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Elixir",
      duration: 200,
      description: "Curso Com Elixir",
      teacher: {
        create: {
            name: "Rafa"
        }
      },
    },
  });

  console.log(result)
}

main();
