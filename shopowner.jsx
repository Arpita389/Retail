import React, { useState } from "react";
import {
  ChakraProvider,
  extendTheme,
  Text,
  Button,
  Select,
  Flex,
  Stack,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Poppins, sans-serif",
  },
});

function ShopOwnerPage() {
  const [selectedType, setSelectedType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleAddProducts = () => {
    if (
      selectedType === "dress" ||
      selectedType === "watch" ||
      selectedType === "electronics" ||
      selectedType === "cosmetics" ||
      selectedType === "jewellery"
    ) {
      setAlertMessage(
        "Will send you a confirmation letter after verifying your details and product."
      );
    } else {
      setAlertMessage(
        "Sorry, you are not eligible as we do not have this category of product."
      );
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="column"
        align="center"
        p={10}
        border="1px solid #ddd"
        backgroundColor="#f9f9f9"
      >
        <nav
          style={{
            marginBottom: "20px",
            border: "0.5px solid grey",
            backgroundColor: "#e9e9e9",
          }}
        >
          <ChakraLink as={Link} to="/">
            Home
          </ChakraLink>{" "}
          |{" "}
          <ChakraLink as={Link} to="/shopowner">
            Shop Owner
          </ChakraLink>
        </nav>
        <Text fontSize="xl" mb={6}>
          Register Yourself and Your Product Type
        </Text>
        <Stack spacing={4}>
          <Input
            size="sm"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            size="sm"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            size="sm"
            placeholder="Shop Name"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
          />
          <Input
            size="sm"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            size="sm"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Select
            size="sm"
            placeholder="Select product type"
            value={selectedType}
            onChange={handleTypeChange}
          >
            <option value="dress">Dress</option>
            <option value="electronics">Electronics</option>
            <option value="grocery">Grocery</option>
            <option value="watch">Watch</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="jewellery">Jewellery</option>
            <option value="food">Food</option>
          </Select>
          {selectedType && (
            <Button size="sm" colorScheme="teal" onClick={handleAddProducts}>
              Add Products
            </Button>
          )}
          {alertMessage && (
            <Alert
              status={
                selectedType === "dress" ||
                selectedType === "watch" ||
                selectedType === "electronics" ||
                selectedType === "cosmetics" ||
                selectedType === "jewellery"
                  ? "success"
                  : "error"
              }
              mt={4}
            >
              <AlertIcon />
              <AlertTitle mr={2}>
                {selectedType === "dress" ||
                selectedType === "watch" ||
                selectedType === "electronics" ||
                selectedType === "cosmetics" ||
                selectedType === "jewellery"
                  ? "Success"
                  : "Error"}
              </AlertTitle>
              <AlertDescription>{alertMessage}</AlertDescription>
            </Alert>
          )}
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default ShopOwnerPage;
