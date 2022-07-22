import prismaClient from "../prisma/client.js";

export async function getPost() {
  const posts = await prismaClient.post.findMany();
  return posts;
}
