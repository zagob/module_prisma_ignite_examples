import { prisma } from "../../connectionPrisma";

async function main() {
  const result = await prisma.modules.create({
    data: {
      description: "Aprendendo firebase do zero",
      name: "Aprendendo Firebase",
      CoursesModules: {
        create: {
          courses: {
            connect: {
              id: "43c5f0bb-f093-4285-8f96-5ee82ba230ba",
            },
          },
        },
      },
    },
  });

  console.log(result);
}

main();
