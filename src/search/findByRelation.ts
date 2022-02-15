import { prisma } from "../connectionPrisma";

async function main() {
  const result = await prisma.coursesModules.findMany({
    include: {
      courses: true,
      modules: true,
    },
  });

  console.log(JSON.stringify(result));
}

main();
