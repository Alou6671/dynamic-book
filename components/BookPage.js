import React from "react";

// Lib
import { Card, Box, Text, Heading, Image } from "@chakra-ui/react";

const BookPage = ({
  pageTitle,
  pageImage,
  pageContent,
  pageIndex,
  pagesLength,
}) => {
  return (
    <Card shadow="xl">
      <Box align="center" p={6}>
        <Heading fontSize="2xl" color="black">
          {pageTitle}
        </Heading>
      </Box>
      {pageImage !== "" && (
        <Box align="center" p={6}>
          <Image
            src={pageImage}
            alt={pageTitle}
            fallbackSrc="https://via.placeholder.com/250"
          />
        </Box>
      )}
      <Box p={8} align="center">
        <Text fontSize="lg" color="black" textAlign="justify">
          {pageContent}
        </Text>
        <Text fontSize="xl" color="black">
          {pageIndex + 1}/{pagesLength}
        </Text>
      </Box>
    </Card>
  );
};

export default BookPage;
