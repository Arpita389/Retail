import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Submit() {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Order Placed Succesfully!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Thanks for shopping! Your order hasn't shipped yet, but we'll send you
        an email when it does.
      </AlertDescription>
    </Alert>
  );
}
export default Submit;
