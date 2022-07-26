import React from "react";
import { Box, Text, Flex, Center } from "@chakra-ui/react";
import Link from "next/link.js";

const Post = ({ title, postId }) => {
  return (
    <Box
      w="300px"
      borderWidth="1px"
      borderRadius="0.375rem"
      borderColor="gray.400"
      overflow="hidden"
      minH="100px"
      margin="10px"
      p="20px"
    >
      <Flex flexDirection={"column"}>
        <Box marginBottom="20px">
          <Center>
            <Text fontWeight="bold" p={8}>
              {title}
            </Text>
          </Center>
        </Box>

        <Flex w="90%" justifyContent={"flex-end"} m="auto">
          <Link href={`/post/${postId}`}>
            <Box
              as="button"
              bg="withe"
              color="#3b49df"
              w="100%"
              borderRadius="md"
              border="1px solid"
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="auto"
              fontSize="xl"
              cursor="pointer"
              _hover={{
                background: "#3b49df",
                color: "white",
              }}
            >
              {" "}
              Ver Post
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Post;
