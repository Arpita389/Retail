import React, { useState } from "react";
import "../index.css";

function Footer() {
  return (
    <div className="main-div">
      <div id="parent-div" style={{ backgroundColor: "#D8BFD8" }}>
        <div>
          <h4
            style={{ fontFamily: "Mongolian Baiti", margin: " 2% 0% 0% 15%" }}
          >
            Pravrtti
          </h4>
          <p
            style={{
              fontFamily: "Bodoni MT",
              textAlign: "left",
              fontSize: "20px",
            }}
          >
            Expert in providing the best designer's collections!!
          </p>
        </div>
        <div className="child1">
          <h5
            style={{
              fontSize: "20px",
              fontFamily: "Bodoni MT",
              marginTop: "2%",
              marginLeft: "39%",
            }}
          >
            HOME
          </h5>
          <a href="/">News</a>
          <a href="/">About </a>
          <a href="/">Contact </a>
        </div>
        <div className="child1">
          <h5
            style={{
              fontSize: "20px",
              fontFamily: "Bodoni MT",
              marginTop: "2%",
              marginLeft: "39%",
            }}
          >
            PAGES
          </h5>
          <a href="/">Clothings</a>
          <a href="/">Jwellery</a>
          <a href="/">Cosmetics </a>
          <a href="/">Watches</a>
          <a href="/">Electronic Appliances</a>
        </div>
        <div className="child1">
          <h5
            style={{
              fontSize: "20px",
              fontFamily: "Bodoni MT",
              marginTop: "2%",
              marginLeft: "39%",
            }}
          >
            SOCIAL
          </h5>
          <a href="/">Twitter</a>
          <a href="/"> Linkedin</a>
          <a href="/"> Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
