// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const movies = await (await fetch("http://localhost:3001/api/movies")).json();

  res.status(200).json({ movies });
}
