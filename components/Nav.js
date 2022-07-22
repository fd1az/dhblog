import React from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import Link from "next/link.js";
import PostModal from "./PostModal.js";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w="100%" borderBottom="1px">
      <Flex
        as="nav"
        align="center"
        justifyContent="space-between"
        maxW="900px"
        m="auto"
        p={8}
      >
        <Link href="/">
          <Box
            as="button"
            bg="black"
            color="white"
            w="120px"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="50px"
            fontSize="2xl"
            fontWeight="bold"
            cursor="pointer"
          >
            DhBloG
          </Box>
        </Link>

        <Box
          as="button"
          bg="withe"
          color="#3b49df"
          w="120px"
          borderRadius="md"
          border="1px solid"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="50px"
          fontSize="xl"
          cursor="pointer"
          onClick={onOpen}
          _hover={{
            background: "#3b49df",
            color: "white",
          }}
        >
          Crear Post
        </Box>
      </Flex>
      <PostModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Nav;
