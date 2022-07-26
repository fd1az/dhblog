// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createPost, getAllPosts } from "../../repo/post.js";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const posts = await getAllPosts();

      res.status(200).json({ posts });
      break;
    case "POST":
      await createPost(req.body);
      res.status(200).json("OK");
      break;
    default:
      break;
  }
}
