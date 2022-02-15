import { prisma } from "../connectionPrisma";

async function main() {
  const result = await prisma.courses.findMany({
    include: {
      CoursesModules: true,
    },
  });

  console.log(JSON.stringify(result));
}

main();
