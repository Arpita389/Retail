import React from "react";
import { Routes, Route } from "react-router-dom";
import Menupage from "./menupage";
import CartPage from "./cart";
import About from "../about/about";
import Contact from "../contact/contact";
import SignUpForm from "../login/signup";
import HomePage from "../homepage/homepage";
import PaymentPage from "../menu/payment";
import Submit from "../login/submit";
function Allroute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/menu/menupage" element={<Menupage />} />
      <Route path="/menu/menupage/payment" element={<PaymentPage />} />
      <Route path="/login/submit" element={<Submit />} />
    </Routes>
  );
}

export default Allroute;
