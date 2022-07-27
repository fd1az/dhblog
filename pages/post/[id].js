import { Box, Center, Divider } from "@chakra-ui/react";
import React from "react";
import { getPost, getAllPosts } from "../../repo/post.js";

const PostDetail = ({ post }) => {
  return (
    <Center>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {post.title}
          </Box>
          <Divider />
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {post.description}
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export async function getStaticPaths() {
  const posts = await getAllPosts();
  //[{ params: { id: '1' } }, { params: { id: '2' } }]
  return {
    paths: posts.map((post) => ({ params: { id: post.id } })),
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return {
    props: { post }, // will be passed to the page component as props
  };
}
export default PostDetail;
