import React from "react";

// Lib
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

const PageCreator = ({ onAddPage, isOpen, onClose }) => {
  const [title, setTitle] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleAddPage = () => {
    onAddPage(title, imageUrl, content);
    setTitle("");
    setImageUrl("");
    setContent("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a new page</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Page title</FormLabel>
            <Input
              placeholder="Enter a title for your page"
              onChange={handleTitleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Page image</FormLabel>
            <Input
              placeholder="Enter an image URL for your page"
              onChange={handleImageUrlChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Page content</FormLabel>
            <Textarea
              placeholder="Enter content for your page"
              onChange={handleContentChange}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleAddPage}>
            Add this page
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PageCreator;
