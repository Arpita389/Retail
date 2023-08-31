import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  HStack,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import ImageModal from "../contact/imagem";
import { FaShareAlt } from "react-icons/fa";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import RatingReviewForm from "../contact/rating";
import RatingReviewSection from "../contact/review";
function Cardt({ title, imgsrc, body, onAddToCart, isAdded }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [isWishlistAdded, setWishlistAdded] = useState(false);
  console.log(imgsrc);
  const handleBuyNow = () => {
    navigate("../menu/menupage/testpay", {
      state: { title, price: body, quantity },
    });
  };
  const handleRatingReviewSubmit = (ratingReview) => {
    const newReview = { title, ...ratingReview };
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    storedReviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(storedReviews));
    setReviews(storedReviews);
  };

  const handleViewReviews = () => {
    navigate("../contact/reviewrating");
  };
  const handleAddToCart = () => {
    onAddToCart(title, quantity);
  };

  const handleDeleteFromCart = () => {
    onAddToCart("", 0);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Check out this item",
          text: title,
          url: window.location.href,
        });
      } else {
        console.log("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  //const handleRatingReviewSubmit = (ratingReview) => {
  //console.log("Submitted rating:", ratingReview.rating);
  //console.log("Submitted review:", ratingReview.review);
  //};

  const handleToggleWishlist = () => {
    if (!isWishlistAdded) {
      const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
      wishlistItems.push({ title, imgsrc, body });
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    } else {
      const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
      const updatedWishlist = wishlistItems.filter(
        (item) => item.title !== title
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
    setWishlistAdded(!isWishlistAdded);
  };
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  //const [isModalOpen, setIsModalOpen] = useState("");
  const handleOpenImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setImageModalOpen(false);
  };
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
      bg="white"
      className="cardt-container"
    >
      <Image
        src={imgsrc}
        alt={title}
        height="200px"
        objectFit="cover"
        onClick={handleOpenImageModal}
        cursor="pointer"
      />
      <Box className="cardt-content">
        <Text fontSize="lg" fontWeight="semibold" mb="2">
          {title}
        </Text>
        <Text fontSize="md" mb="2">
          Price: {body}
        </Text>
        <NumberInput
          defaultValue={quantity}
          min={1}
          onChange={(value) => setQuantity(parseInt(value))}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <HStack mt="2" spacing="2">
          <Button
            colorScheme={isAdded ? "red" : "blue"}
            onClick={isAdded ? handleDeleteFromCart : handleAddToCart}
          >
            {isAdded ? "Remove from Cart" : "Add to Cart"}
          </Button>
          {!isAdded && (
            <Button colorScheme="green" onClick={handleBuyNow}>
              Buy Now
            </Button>
          )}
          <Popover>
            <PopoverTrigger>
              <IconButton
                icon={<FaShareAlt />}
                aria-label="Share"
                variant="ghost"
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Share Options</PopoverHeader>
              <PopoverBody>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  leftIcon={<FaWhatsapp />}
                >
                  WhatsApp
                </Button>
                <Button variant="outline" leftIcon={<FaFacebook />}>
                  Facebook
                </Button>
                <Button variant="outline" leftIcon={<FaInstagram />}>
                  Instagram
                </Button>
                <Button variant="outline" leftIcon={<FaTwitter />}>
                  Twitter
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Button
            variant="outline"
            colorScheme={isWishlistAdded ? "blue" : "gray"}
            onClick={handleToggleWishlist}
          >
            <FaHeart size={20} color={isWishlistAdded ? "blue" : "gray"} />
          </Button>
        </HStack>
      </Box>
      {/*
        <RatingReviewSection
          title={title}
          imgsrc={imgsrc}
          onSubmit={handleRatingReviewSubmit}
        />*/
      }
      {<RatingReviewForm imgsrc={imgsrc} onSubmit={handleRatingReviewSubmit} />}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={handleCloseImageModal}
        imageUrl={imgsrc}
        altText={title}
        name={title}
        price={body}
      />
    </Box>
  );
}

export default Cardt;
