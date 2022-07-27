import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import config from "../config.js";

const createPost = async (post) => {
  return fetch(`${config.baseURL}api/post`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const PostModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();
  const toast = useToast();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const createPostMutation = useMutation(createPost, {
    onSuccess: () => {
      onClose();
      queryClient.invalidateQueries(["posts"]);
      toast({
        title: "Post creado :)",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top-right",
      });
    },
  });

  const handlerCreatePost = () => {
    createPostMutation.mutate({ title, description });
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear un SUPER Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Título</FormLabel>
              <Input
                ref={initialRef}
                placeholder="El título del post....."
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Descripción</FormLabel>
              <Input
                placeholder="Una hermosa descripción..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handlerCreatePost}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostModal;
