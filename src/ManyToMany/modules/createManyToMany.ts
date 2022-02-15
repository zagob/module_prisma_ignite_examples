import { prisma } from "../../connectionPrisma";

async function main() {
  const results = await prisma.coursesModules.create({
    data: {
        fk_id_course: "43c5f0bb-f093-4285-8f96-5ee82ba230ba",
        fk_id_module: "404cb894-ef2b-4244-98a6-98dc1390a5a8"
    },
  });

  console.log(results);
}

main();
