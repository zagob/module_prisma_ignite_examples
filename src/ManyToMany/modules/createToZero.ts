import { prisma } from "../../connectionPrisma";

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      courses: {
        create: {
          duration: 200,
          name: "Curso de NodeJS",
          description: "Curso completo",
        },
      },
      modules: {
        create: {
          description: "Curso completo de PrismaIO",
          name: "PrismaIO",
        },
      },
    },
  });

  console.log(result);
}

main();
