import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
} from "@chakra-ui/react";

function ImageModal({ isOpen, onClose, imageUrl, altText, name, price }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Image src={imageUrl} alt={altText} />
          <Text mt="2" fontSize="lg" fontWeight="semibold">
            {name}
          </Text>
          <Text fontSize="md">Price: {price}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ImageModal;
