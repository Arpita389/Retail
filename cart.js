import React, { useState, useEffect } from "react";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart");
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteItem = async (item) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/cart/${encodeURIComponent(item.name)}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data);
      getCartItems(); // Refresh the cart items after deleting
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item}
            <button onClick={() => handleDeleteItem(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
