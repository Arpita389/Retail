import React, { useState, useEffect } from "react";
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

function SingleUserPage() {
  const [selectedType, setSelectedType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const [confirmation, setConfirmation] = useState(false);
  const [randomPrice, setRandomPrice] = useState(null);
  const [sellMessage, setSellMessage] = useState(null);

  useEffect(() => {
    if (confirmation) {
      const timer = setTimeout(() => {
        const price = Math.floor(Math.random() * (500 - 250 + 1)) + 250;
        setRandomPrice(price);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [confirmation]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  const handleSellYes = () => {
    setSellMessage("You sold your product to us");
  };

  const handleSellNo = () => {
    setSellMessage("As your wish");
  };
  const handleAddProducts = () => {
    if (image) {
      setAlertMessage(
        "Will send you a confirmation letter after verifying your details, product, and image."
      );
      setConfirmation(true);
    } else {
      setAlertMessage("Please upload an image of your product.");
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
          <ChakraLink as={Link} to="/signleuser">
            Single User
          </ChakraLink>
        </nav>
        <Text fontSize="xl" mb={6}>
          Register Yourself to sell with us
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
            <option value="home made">Home made</option>
            <option value="used">Used</option>
          </Select>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {selectedType && (
            <Button size="sm" colorScheme="teal" onClick={handleAddProducts}>
              Add Products
            </Button>
          )}
          {alertMessage && (
            <Alert status={confirmation ? "success" : "error"} mt={4}>
              <AlertIcon />
              <AlertTitle mr={2}>
                {confirmation ? "Success" : "Error"}
              </AlertTitle>
              <AlertDescription>{alertMessage}</AlertDescription>
            </Alert>
          )}
          {randomPrice && <Text mt={4}>Price: ${randomPrice}</Text>}
          {confirmation && (
            <Stack mt={4} spacing={2}>
              <Text>Do you want to sell?</Text>
              <Button size="sm" colorScheme="teal" onClick={handleSellYes}>
                Yes
              </Button>
              <Button size="sm" colorScheme="red" onClick={handleSellNo}>
                No
              </Button>
            </Stack>
          )}
          {sellMessage && <Text mt={4}>{sellMessage}</Text>}
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default SingleUserPage;
