import React from "react";

// Components
import BookPage from "./BookPage";
import PageCreator from "./PageCreator";
import PageEditor from "./PageEditor";

// Lib
import { Button, Flex } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const Book = () => {
  const [pages, setPages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const {
    isOpen: isCreatorOpen,
    onOpen: onCreatorOpen,
    onClose: onCreatorClose,
  } = useDisclosure();

  const {
    isOpen: isEditorOpen,
    onOpen: onEditorOpen,
    onClose: onEditorClose,
  } = useDisclosure();

  React.useEffect(() => {
    const storedPages = JSON.parse(localStorage.getItem("pages"));
    if (storedPages) {
      setPages(storedPages);
    }
  }, []);

  const addPage = (title, imageUrl, content) => {
    const pagesCopy = [...pages];
    pagesCopy.push({ title, imageUrl, content, index: pages.length });
    setPages(pagesCopy);
    setCurrentPage(pages.length);
    localStorage.setItem("pages", JSON.stringify(pagesCopy));
    onCreatorClose();
  };

  const updatePage = (title, imageUrl, content, index) => {
    const pagesCopy = [...pages];

    pagesCopy[index] = { title, imageUrl, content, index };
    setPages(pagesCopy);
    localStorage.setItem("pages", JSON.stringify(pagesCopy));
    onEditorClose();
  };

  const reorganizeIndexes = (pagesCopy) => {
    pagesCopy.forEach((page, index) => {
      page.index = index;
    });
  };

  const deletePage = (index) => {
    const pagesCopy = [...pages];

    pagesCopy.splice(index, 1);
    reorganizeIndexes(pagesCopy);
    setPages(pagesCopy);
    if (index > 0) {
      setCurrentPage(index - 1);
    }
    localStorage.setItem("pages", JSON.stringify(pagesCopy));

    onEditorClose();
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
          onClick={onCreatorOpen}
        >
          Add page
        </Button>
        <PageCreator
          onAddPage={addPage}
          isOpen={isCreatorOpen}
          onClose={onCreatorClose}
        />
        {pages.length > 0 && (
          <>
            <Button
              colorScheme="orange"
              variant="outline"
              size="lg"
              onClick={onEditorOpen}
            >
              Edit page
            </Button>
            <PageEditor
              onEditPage={updatePage}
              onDeletePage={deletePage}
              isOpen={isEditorOpen}
              onClose={onEditorClose}
              page={pages[currentPage]}
            />
          </>
        )}
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
