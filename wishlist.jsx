import React from "react";
import { FaTimes } from "react-icons/fa";

function Wishlist() {
  const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

  const handleRemoveFromWishlist = (item) => {
    const updatedWishlist = wishlistItems.filter(
      (wishlistItem) => wishlistItem.title !== item.title
    );
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    window.location.reload();
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.shopify.com/app-store/listing_images/34ae0275ebf361b3f6135ce614b37b6e/icon/CKXswvb13_0CEAE=.jpeg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 style={{ fontSize: "30px" }}>My Wishlist</h2>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.title}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={item.imgsrc}
                alt={item.title}
                style={{ width: "100px", marginRight: "10px" }}
              />
              <div>
                <h3>{item.title}</h3>
                <p>Price: {item.body}</p>
                <button
                  onClick={() => handleRemoveFromWishlist(item)}
                  leftIcon={<FaTimes />}
                  style={{
                    marginTop: "5px",
                    border: "1px solid red",
                    color: "red",
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "5px 10px",
                  }}
                >
                  <FaTimes style={{ marginRight: "5px" }} />
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;
