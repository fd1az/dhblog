import { Box, Flex } from "@chakra-ui/react";
import Post from "../components/Post.js";
import { getAllPosts } from "../repo/post.js";
import { useQuery } from "@tanstack/react-query";

const fetchPost = async () => {
  return fetch("http://localhost:3000/api/post").then((data) => data.json());
};

export default function Home({ posts }) {
  const { data, isError, isLoading, isSuccess } = useQuery(
    ["posts"],
    fetchPost,
    {
      initialData: { data: posts },
    }
  );
  console.log(data);
  return (
    <Box bg="#f5f5f5" minH="100vh">
      <Flex
        as="main"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        {data?.posts?.map((post) => (
          <Post key={post.id} title={post.title} postId={post.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps(context) {
  const posts = await getAllPosts();
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
