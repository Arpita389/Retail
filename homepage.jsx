import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import About from "../about/about";
import Contact from "../contact/contact";
import SignUpForm from "../login/signup";
import icon2 from "../images/icon1.png";

function HomePage() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="icon">
          <img src={icon2} alt="Icon" />
        </div>
        <div className="logo">
          <h2>Pravrtii</h2>
        </div>
        <div className="nav-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/signup"}>Login</Link>
        </div>
      </nav>
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
            consumer for personal use. The transaction itself can occur through
            a number of different sales channels, such as online, in a
            brick-and-mortar storefront, through direct sales, or direct mail.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <p>
            Retail describes the sale of a product or service to an individual
            consumer for personal use. The transaction itself can occur through
            a number of different sales channels, such as online, in a
            brick-and-mortar storefront, through direct sales, or direct mail.
            Here we provide multiple payment process. we ansure that for any
            failure in transition we will refund the money as sson as possible
            after verifing it.
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
            Here we will also provide offer system for regular customer and
            also in some special occassion . we also provide some offer more
            demanded product. here we also provided installment payment system. 
          </p>
        </div>
      </div>
      <footer>
        <p>&copy; 2023 One Step. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
