// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createPost, getAllPosts } from "../../repo/post.js";
import Cors from "cors";
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
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
