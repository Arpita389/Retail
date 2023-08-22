import React from "react";
import { Routes, Route } from "react-router-dom";
import Menupage from "./menupage";
import CartPage from "./cart";
import About from "../about/about";
import Contact from "../contact/contact";
import SignUpForm from "../login/signup";
import Home from "../homepage/home";
import PaymentPage from "../menu/payment";
import Submit from "../login/submit";
import SignUp from "../login/testsignup";
import SignIn from "../login/testsignin";
import Payment from "./testpay";
import UserTypeSelection from "../homepage/usertype";
import ShopOwnerPage from "../homepage/shopowner";
import SingleUserPage from "../homepage/signleuser";
function Allroute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testsignup" element={<SignUp />} />
      <Route path="/testsignin" element={<SignIn />} />
      <Route path="/testsignup/testsignin" element={<SignIn />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/menu/menupage" element={<Menupage />} />
      <Route path="/menu/menupage/testpay" element={<Payment/>} />
      <Route path="/login/submit" element={<Submit />} />
      <Route path="/usertype" element={<UserTypeSelection/>}/>
      <Route path="/shopowner" element={<ShopOwnerPage/>}/>
      <Route path="/signleuser" element={<SingleUserPage/>}/>
    </Routes>
  );
}

export default Allroute;
