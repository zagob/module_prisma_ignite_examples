import { prisma } from "../../connectionPrisma";

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de ReactNative',
      description: "Curso excelente de RN",
      duration: 300,
      teacher: {
          connect: {
              id: ""
          }
      }
    },
  });

  console.log(result)
}

main();
