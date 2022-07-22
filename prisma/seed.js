import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: "Mi primer Post",
      description: "zarpado post",
    },
  });
}
main()
  .catch((e) => console.log(e))
  .finally(async () => await prisma.$disconnect());
