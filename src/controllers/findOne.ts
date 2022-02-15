import { prisma } from "../connectionPrisma";

async function main() {
  // SELECT * FROM COURSES LIMIT 1
  const course = await prisma.courses.findFirst({
    take: -1,
  });
  console.log(course);
}

main();
