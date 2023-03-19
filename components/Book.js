import React from "react";

import { Button, Flex, Text } from "@chakra-ui/react";
import BookPage from "./BookPage";
import PageCreator from "./PageCreator";
import { useDisclosure } from "@chakra-ui/react";

const Book = () => {
  const [pages, setPages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);

  const {
    isOpen: isCreatorOpen,
    onOpen: onCreatorOpen,
    onClose: onCreatorClose,
  } = useDisclosure();

  const addPage = (title, imageUrl, content) => {
    setPages([
      ...pages,
      {
        title: title,
        imageUrl: imageUrl,
        content: content,
        index: pages.length,
      },
    ]);
    setCurrentPage(pages.length);
    onCreatorClose();
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Flex justify="space-between" align="center" mb={4} mt={4}>
        <Button
          colorScheme="blue"
          variant="outline"
          size="lg"
          mb={4}
          onClick={onCreatorOpen}
        >
          Add page
        </Button>
        <PageCreator
          onAddPage={addPage}
          isOpen={isCreatorOpen}
          onClose={onCreatorClose}
        />
      </Flex>
      {pages.length > 0 && (
        <>
          <BookPage
            pageTitle={pages[currentPage]?.title}
            pageImage={pages[currentPage]?.imageUrl}
            pageContent={pages[currentPage]?.content}
            pageIndex={pages[currentPage]?.index}
            pagesLength={pages?.length}
          />
          <Flex justify="space-between" align="center" mt={4}>
            <Button
              onClick={previousPage}
              disabled={currentPage === 0}
              colorScheme="blue"
            >
              Previous page
            </Button>
            <Button
              onClick={nextPage}
              disabled={currentPage === pages?.length - 1}
              colorScheme="green"
            >
              Next page
            </Button>
          </Flex>
        </>
      )}
    </>
  );
};

export default Book;
