// Lib
import { Box } from "@chakra-ui/react";

// Components
import Book from "../../components/Book";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Box p={50}>
        <Header />
        <Book />
      </Box>
    </>
  );
}
