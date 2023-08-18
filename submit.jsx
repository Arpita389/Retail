import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function Submit() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        maxWidth="400px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Order Placed Successfully!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for shopping! Your order hasn't shipped yet, but we'll send you
          an email when it does.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default Submit;
