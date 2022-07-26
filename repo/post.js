import prismaClient from "../prisma/client.js";

export async function getAllPosts() {
  const posts = await prismaClient.post.findMany();
  return posts;
}

export async function createPost(post) {
  const posts = await prismaClient.post.create({
    data: {
      ...post,
    },
  });
  return posts;
}

export async function getPost(postId) {
  const posts = await prismaClient.post.findUnique({
    where: {
      id: postId,
    },
  });
  return posts;
}
