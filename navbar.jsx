import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { PhoneIcon } from "@chakra-ui/icons";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../index.css";
function Navbar() {
  return (
    <>
      <nav className="Nav1">
        <div className="maindiv">
          <div className="sec1">
            <div className="logo">
              <h1>
                <a href="/" alt="about">
                  Pravrtti
                </a>
              </h1>
            </div>
          </div>
          <div className="sec2">
            <div className="contact">
              <PhoneIcon />
            </div>
            <div className="wish">
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className="cart">
              <ShoppingCartOutlinedIcon />
            </div>
            <div className="profile">
              <PersonOutlineOutlinedIcon />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
