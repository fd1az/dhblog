import { Box, Flex } from "@chakra-ui/react";
import Post from "../components/Post.js";
import { getPost } from "../repo/post.js";
export default function Home({ posts }) {
  console.log(posts);
  return (
    <Box bg="#f5f5f5" minH="100vh">
      <Flex
        as="main"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        {posts?.map((post) => (
          <Post key={post.id} title={post.title} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps(context) {
  const posts = await getPost();
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
