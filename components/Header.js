import React from "react";

// Lib
import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      align="center"
      p={6}
      bgGradient="linear(to-r, #7928CA, #FF0080)"
      rounded="lg"
    >
      <Text fontSize="4xl" color="white">
        Your Book Creator
      </Text>
    </Box>
  );
};

export default Header;
