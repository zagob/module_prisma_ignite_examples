import { prisma } from "../connectionPrisma";

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "892cfc13-80ed-4b18-adf6-4920dba6ce07",
    },
  });

  console.log(result);
}

main();
