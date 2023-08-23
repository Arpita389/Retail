import React, { useState } from "react";
import "../profile.css";

function Profile() {
  const [show, setshow] = useState(false);
  return (
    <>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.4VdCwZ5N8TrzZorHRnr5zQAAAA&pid=Api&P=0&h=180"
        alt="not"
        className="user-pic"
        onClick={() => setshow(!show)}
      />
      {show ? (
        <div className="sub-menu-wrap">
          <div className="sub-menu">
            <div className="user-info">
              <img src="/" alt="/" />
              <h3>Name</h3>
            </div>
            <hr />
            <a href="#" className="sub-menu-link">
              <img src="#" alt="#" />
              <p>Edit Profile</p>
              <span></span>
            </a>
            <a href="#" className="sub-menu-link">
              <img src="#" alt="#" />
              <p>Settings & Privacy</p>
              <span></span>
            </a>
            <a href="#" className="sub-menu-link">
              <img src="#" alt="#" />
              <p>Help & Support</p>
              <span></span>
            </a>
            <a href="#" className="sub-menu-link">
              <img src="#" alt="#" />
              <p>logout</p>
              <span></span>
            </a>
          </div>
        </div>
      ) : null}
    </>
    /*let subMenu=document.getElementById("subMenu");
    function toggleMenu(){
      subMenu.classList.toggle("open-menu");
    }*/
  );
}
export default Profile;
