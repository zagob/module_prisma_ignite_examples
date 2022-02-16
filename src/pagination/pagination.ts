import { prisma } from "../connectionPrisma";

async function main() {
  // [1, 2, 3, 4, 5, 6, 7]

  let skip = 0;
  let exist = true;

  while (exist) {
    const result = await prisma.courses.findMany({
      skip: skip,
      take: 2,
    });
    skip += 2;
    console.log(result);
    console.log("--------");

    if (result.length <= 0) {
      exist = false;
    }
  }
}

main();
