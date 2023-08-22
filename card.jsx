import React, { useState } from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import PaymentPage from "./payment";
//import ItemDetailsPage from "./item";

function Cardt({ title, imgsrc, body, onAddToCart, isAdded }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleBuyNow = () => {
    const totalPrice = body * quantity;
    alert(`💰 Your total price for ${quantity} item is ${totalPrice}`);
    navigate("../menu/menupage/testpay", { state: { title, price: body, quantity } });
  };

  const handleAddToCart = () => {
    onAddToCart(title, quantity);
    alert(`🛒 ${quantity} ${title} added to your cart. 🛍️`);
  };

  const handleDeleteFromCart = () => {
    onAddToCart("", 0);
    alert(`🗑️ ${title} is removed from your cart.`);
  };

  return (
    <div className="cardt-container">
      <img src={imgsrc} alt={title} />
      <div className="cardt-content">
        <h2>{title}</h2>
        <p>Price: {body}</p>
        <select value={quantity} onChange={handleQuantityChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <div className="cardt-buttons">
          {!isAdded ? (
            <button onClick={handleAddToCart}>Add</button>
          ) : (
            <button onClick={handleDeleteFromCart}>Delete</button>
          )}
          {!isAdded && <button onClick={handleBuyNow}>Buy Now</button>}
        </div>
      </div>
    </div>
  );
}

export default Cardt;
