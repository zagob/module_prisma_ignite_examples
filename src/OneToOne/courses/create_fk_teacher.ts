import { prisma } from "../../connectionPrisma";

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de ReactJS",
      duration: 300,
      description: "Curso com Diego",
      fk_id_teacher: "cd204481-bade-4fa0-8a80-b69e018c80d1"
    },
  });

  console.log(result)
}

main();
