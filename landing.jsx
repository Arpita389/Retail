import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

function Menu() {
  return (
    <div className="landing-page">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/userprofile"}>Profile</Link>
      </nav>
      <header className="header">
        <h1 className="header-title">Welcome to Our Retail Store</h1>
        <p className="header-subtitle">
          Discover our wide range of products and shop your favorites.
        </p>
        <Link to="/menupage" className="explore-button">
          Explore Now
        </Link>
      </header>
      <section className="featured-products">
        <div className="payment-feature">
          <div className="payment-content">
            <img
              src="https://www.lyra.com/in/wp-content/uploads/sites/8/2019/05/2-4.png"
              alt="Payment"
              className="payment-image"
            />
            <p className="payment-description">
              The Unique Feature of our website is one can pay a part of price
              through online process. specially this feature is used for the
              person who donot have enough price in their account.
            </p>
          </div>
          <div className="payment-content">
            <img
              src="https://img.freepik.com/premium-vector/delivery-man-with-cardboard-box-near-blue-scooter_313242-270.jpg?w=360"
              alt="Payment"
              className="payment-image"
            />
            <p className="payment-description">
              can pay rest with cash on delivery process.if they donot pay it
              then we will return their product. if we find one as fraud admin
              can remove the user,after that he canot order from our website.
            </p>
          </div>
        </div>
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img
              src="https://webobjects2.cdw.com/is/image/CDW/7167577?$product-main$"
              alt="Product 1"
              className="product-image"
            />
            <h3 className="product-name">Watch</h3>
          </div>
          <div className="product-card">
            <img
              src="https://i.pinimg.com/600x315/eb/98/61/eb98611236164425da1182a30e5f8678.jpg"
              alt="Jewellery"
              className="product-image"
            />
            <h3 className="product-name">Jewellery</h3>
          </div>
          <div className="product-card">
            <img
              src="https://media.istockphoto.com/id/1174598609/photo/set-of-contemporary-house-appliances-isolated-on-white.jpg?s=612x612&w=0&k=20&c=bBMILbCpLkhIxbL7sAAXaFOaFaSXFCt80ccHgl7iiWM="
              alt="Electronic"
              className="product-image"
            />
            <h3 className="product-name">Electronic</h3>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <h2 className="section-title">Subscribe to Our Newsletter</h2>
        <p className="subscribe-description">
          Stay updated with our latest products and offers.
        </p>
        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="subscribe-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </section>
      <footer className="footer">
        <p className="footer-text">
          &copy; 2023 bit lords. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Menu;
