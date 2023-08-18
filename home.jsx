import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  ChakraProvider,
  extendTheme,
  Image,
  Text,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./homepage.css";
import About from "../about/about";
import Contact from "../contact/contact";
import SignUpForm from "../login/signup";
import icon2 from "../images/icon1.png";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Poppins, sans-serif",
  },
});

function Home() {
  return (
    <ChakraProvider theme={theme}>
      <div className="home-page">
        <nav className="navbar">
          <div className="icon">
            <img src={icon2} alt="Icon" />
          </div>
          <div className="logo">
            <h2>Pragati</h2>
          </div>
          <div className="nav-links">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/signup"}>Login</Link>
          </div>
        </nav>

        {/* Carousel */}
        <Box w="100%" mt="4">
          <Carousel
            infiniteLoop
            autoPlay
            interval={3000}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <Image
                src="https://res.cloudinary.com/hilnmyskv/image/upload/q_auto,f_auto/v1681989710/Algolia_com_Blog_assets/Featured_images/ecommerce/what-is-online-retail-merchandising-an-introduction/jlzzp05d9w1tb3jdrvzi.jpg"
                alt="Carousel Image 1"
                h="600px"
                objectFit="cover"
              />
              <Text textAlign="center" mt="2">
                Carousel Image 1
              </Text>
            </div>
            <div>
              <Image
                src="https://www.inventiva.co.in/wp-content/uploads/2022/10/Top-10-Clothing-Brand-Main-Banner-780x470.jpeg"
                alt="Carousel Image 2"
                h="600px"
                objectFit="cover"
              />
              <Text textAlign="center" mt="2">
                Carousel Image 2
              </Text>
            </div>
            <div>
              <Image
                src="https://dcassetcdn.com/design_img/3012877/441657/441657_16639555_3012877_69d35617_image.jpg"
                alt="Carousel Image 2"
                h="600px"
                objectFit="cover"
              />
              <Text textAlign="center" mt="2">
                Carousel Image 3
              </Text>
            </div>
            <div>
              <Image
                src="https://img.freepik.com/free-vector/cosmetic-products-realistic-advertisement-template_1284-23472.jpg?w=2000"
                alt="Carousel Image 2"
                h="600px"
                objectFit="cover"
              />
              <Text textAlign="center" mt="2">
                Carousel Image 4
              </Text>
            </div>
            <div>
              <Image
                src="https://petapixel.com/assets/uploads/2022/05/The-Science-Behind-Why-Watches-are-Set-to-10-10-in-Advertising-Photos.jpg"
                alt="Carousel Image 2"
                h="600px"
                objectFit="cover"
              />
              <Text textAlign="center" mt="2">
                Carousel Image 5
              </Text>
            </div>
            <div>
              <Image
                src="https://image.cnbcfm.com/api/v1/image/107276375-1690302733768-Self-Checkout_Blinded_2.png?v=1690891535&w=1920&h=1080"
                alt="Carousel Image 2"
                h="600px"
                objectFit="cover"
              />
              <Text textAlign="center" mt="2">
                Carousel Image 6
              </Text>
            </div>
            {/* Add more carousel items as needed */}
          </Carousel>
        </Box>

        <div className="content-section">
          <div className="content-image">
            <img
              src="https://shophayes.com/wp-content/uploads/2020/05/Online-Shopping-Carts.png"
              alt="Food"
            />
          </div>
          <div className="content-text">
            <h1>Welcome To Our Website</h1>
            <p>
              Retail describes the sale of a product or service to an individual
              consumer for personal use. The transaction itself can occur
              through a number of different sales channels, such as online, in a
              brick-and-mortar storefront, through direct sales, or direct mail.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="section-content">
            <p>
              Retail describes the sale of a product or service to an individual
              consumer for personal use. The transaction itself can occur
              through a number of different sales channels, such as online, in a
              brick-and-mortar storefront, through direct sales, or direct mail.
              Here we provide multiple payment process. we ensure that for any
              failure in transition we will refund the money as soon as possible
              after verifying it.
            </p>
          </div>
          <div className="section-image">
            <img
              src="https://cdn.agoramada.com/original/1X/b7d26242ff5f9f4b336a119776338c316c5a6098.jpeg"
              alt="Image"
            />
          </div>
        </div>

        <div className="section">
          <div className="section-image">
            <img
              src="https://media.istockphoto.com/id/1169592022/vector/smart-retail-in-smart-city-concept-illustration.jpg?s=612x612&w=0&k=20&c=eJjgqXw3OhCDYR9zj_gySQ5CyRmEgGz_NJYanWbI7Oc="
              alt="Image"
            />
          </div>
          <div className="section-content">
            <p>
              Here we will also provide offer systems for regular customers and
              also for some special occasions. We also provide offers on more
              demanded products. Here we also provide an installment payment
              system.
            </p>
          </div>
        </div>

        <footer>
          <p>&copy; 2023 One Step. All rights reserved.</p>
        </footer>
      </div>
    </ChakraProvider>
  );
}

export default Home;
