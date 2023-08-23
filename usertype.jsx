import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  ChakraProvider,
  extendTheme,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Poppins, sans-serif",
  },
});

function UserTypeSelection() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign="center"
        p={10}
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/shopping-making-purchase-concept-sale-discount_185193-129894.jpg?w=2000")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <Text fontSize="xl" mb={6}>
          Choose your user type:
        </Text>
        <Flex justifyContent="center">
          <Link to="/signleuser">
            <Button colorScheme="teal" mr={4}>
              Single User
            </Button>
          </Link>
          <Link to="/shopowner">
            <Button colorScheme="blue">Shop Owner</Button>
          </Link>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default UserTypeSelection;
