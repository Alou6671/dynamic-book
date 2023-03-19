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
  Flex,
} from "@chakra-ui/react";

const PageEditor = ({ onEditPage, onDeletePage, isOpen, onClose, page }) => {
  const [title, setTitle] = React.useState(
    page?.title !== "" ? page?.title : ""
  );
  const [imageUrl, setImageUrl] = React.useState(
    page?.imageUrl !== "" ? page?.imageUrl : ""
  );
  const [content, setContent] = React.useState(
    page?.content !== "" ? page?.content : ""
  );

  React.useEffect(() => {
    setTitle(page?.title ?? "");
    setImageUrl(page?.imageUrl ?? "");
    setContent(page?.content ?? "");
  }, [page]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit this page</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Page title</FormLabel>
            <Input
              placeholder="Enter a title for your page"
              onChange={handleTitleChange}
              defaultValue={title}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Page image</FormLabel>
            <Input
              placeholder="Enter an image URL for your page"
              onChange={handleImageUrlChange}
              defaultValue={imageUrl}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Page content</FormLabel>
            <Textarea
              placeholder="Enter content for your page"
              onChange={handleContentChange}
              defaultValue={content}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Flex spacing={5}>
            <Button colorScheme="red" onClick={() => onDeletePage(page?.index)}>
              Delete this page
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => onEditPage(title, imageUrl, content, page?.index)}
            >
              Edit this page
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PageEditor;
