import React from "react";
import "./about.css";
import vision from "../images/vision.png";
import goal from "../images/goal.png";
import mission from "../images/mission.png";
import { Link } from "react-router-dom";
import whatsapp from "../images/whatsapp.png";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import HomePage from "../homepage/homepage";
import Contact from "../contact/contact";
import SignUp from "../login/testsignup";

function About() {
  return (
    <div className="about-container">
      <nav className="about-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Page</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/testsignup">Sign Up</Link>
      </nav>
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-card">
          <h4>Our Vision</h4>
          <img src={vision} alt="Vision" />
          <p>
            A clear vision statement articulates the long-term goals and core
            values of your company and helps bussiness skill ,shapes your online presence to align with
            your vision.
          </p>
        </div>
        <div className="about-card">
          <h4>Our Goal</h4>
          <img src={goal} alt="Goal" />
          <p>
            Our goal is to provide a seamless online shopping experience where
            customers can buy and sell a wide range of products and services,
            all in one platform.
          </p>
        </div>
        <div className="about-card">
          <h4>Our Mission</h4>
          <img src={mission} alt="Mission" />
          <p>
            Our mission is to deliver convenience and quality to our customers
            through an accessible and user-friendly e-commerce platform.
          </p>
        </div>
      </div>
      <footer>
        <div className="social-icons">
          <a href="#" className="social-icon" id="facebook">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="#" className="social-icon" id="whatsapp">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <a href="#" className="social-icon" id="twitter">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
        <p>&copy; 2023 Bit Lords. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
