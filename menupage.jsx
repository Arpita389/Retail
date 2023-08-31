import React, { useState, useEffect } from "react";
import Cardt from "./card";
import "./menupage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaSortAmountDown, FaSortAmountUp, FaTimes } from "react-icons/fa";
import RecommendedItems from "./reco";
function Menupage() {
  const [showfarr, setShowfarr] = useState([]);
  const [showsarr, setShowsarr] = useState([]);
  const [showtarr, setShowtarr] = useState([]);
  const [showfoarr, setShowfoarr] = useState([]);
  const [showfiarr, setShowfiarr] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [state, setState] = useState(false);
  const [sortingOrder, setSortingOrder] = useState(null);
  const [quantities, setQuantities] = useState({});

  const handleSorting = (order) => {
    setSortingOrder(order);
  };
  const handleQuantityChange = (item, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.name]: quantity,
    }));
  };
  const [obj, setObj] = useState({
    Dress: false,
    Jwellery: false,
    Cosmetic: false,
    Watch: false,
    Electronics: false,
  });
  const recommendedItems = [
    {
      id: 1,
      name: "Dress",
      category: "Dress",
      image:
        "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fHww&w=1000&q=80",
      price: 350,
    },
    {
      id: 2,
      name: "Jwellery",
      category: "Jwellery",
      image:
        "https://images.fineartamerica.com/images-medium-large/bridal-power-ambreen-jamil.jpg",
      price: 13330,
    },
    {
      id: 3,
      name: "Electronics",
      category: "Electronics",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2023/1/DO/WO/NX/63182719/product-jpeg-500x500.jpg",
      price: 11240,
    },
  ];
  const button = ["Dress", "Jwellery", "Cosmetic", "Watch", "Electronics"];
  const categoryDiscounts = {
    Dress: 10,
    Jwellery: 5,
    Cosmetic: 15,
    Watch: 8,
    Electronics: 12,
  };
  const getdata1 = async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/Dhanada-Panda/data_hackpro/dress",
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setShowfarr(data);
      } else {
        const err = await res.json();
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getdata2 = async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/Dhanada-Panda/data_hackpro/jwellery",
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setShowsarr(data);
      } else {
        const err = await res.json();
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getdata3 = async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/Dhanada-Panda/data_hackpro/cosmetic",
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setShowtarr(data);
      } else {
        const err = await res.json();
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getdata4 = async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/Dhanada-Panda/data_hackpro/watch",
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setShowfoarr(data);
      } else {
        const err = await res.json();
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getdata5 = async () => {
    try {
      const res = await fetch(
        "https://my-json-server.typicode.com/Dhanada-Panda/data_hackpro/electronics",
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setShowfiarr(data);
      } else {
        const err = await res.json();
        console.log(err);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleshow = (el) => {
    const objkeys = Object.keys(obj);
    const com1 = objkeys.filter((item) => !item.includes(el));
    const com2 = objkeys.filter((item) => item.includes(el));
    com1.map((ele) => {
      obj[ele] = false;
    });
    com2.map((ele) => {
      obj[ele] = true;
    });
    setObj(obj);
    setState(!state);
  };
  const addToCart = async (item) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item }),
      });
      const data = await response.json();
      console.log(data);
      setAddedItems([...addedItems, item]);

      getCartItems();
    } catch (error) {
      console.log(error);
    }
  };

  const getCartItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart");
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [showAddedItems, setShowAddedItems] = useState(false);
  const [addedItemsList, setAddedItemsList] = useState([]);

  const handleShowAddedItems = () => {
    setShowAddedItems(!showAddedItems);
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
      getCartItems();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata1();
    getdata2();
    getdata3();
    getdata4();
    getdata5();
    getCartItems();
  }, [state]);
  useEffect(() => {
    const sortedAddedItems = [...addedItemsList];
    if (sortingOrder === "lowToHigh") {
      sortedAddedItems.sort((a, b) => a.price - b.price);
    } else if (sortingOrder === "highToLow") {
      sortedAddedItems.sort((a, b) => b.price - a.price);
    }
    setAddedItemsList(sortedAddedItems);
  }, [state, sortingOrder]);

  return (
    <div
      className="menu-container"
      style={{
        backgroundImage: `url("https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Link to="/cart" className="cart-link">
        Go to Cart
      </Link>
      <Link to="/wishlist" className="cart-link">
        See Your Wishlisted Item
      </Link>
      <Link to="/reviewrating" className="cart-link">
        rating and review page
      </Link>
      <div className="button-container">
        {button.map((el) => (
          <button id="part-button" key={el} onClick={() => handleshow(el)}>
            {el}
          </button>
        ))}
        <button onClick={() => handleSorting("lowToHigh")}>
          <FaSortAmountUp />
        </button>
        <button onClick={() => handleSorting("highToLow")}>
          <FaSortAmountDown />
        </button>
        <button onClick={() => handleSorting(null)}>
          <FaTimes />
        </button>
      </div>
      {/*<RecommendedItems
        recommendedItems={recommendedItems}
        categoryDiscounts={categoryDiscounts}
        addToCart={addToCart}
        addedItems={addedItems}
      />*/}
      <div className="parent_menu">
        {obj.Dress === true &&
          showfarr
            .slice()
            .sort((a, b) =>
              sortingOrder === "lowToHigh"
                ? a.price - b.price
                : sortingOrder === "highToLow"
                ? b.price - a.price
                : 0
            )
            .map((el) => (
              <div id="child_menu1" key={el.id}>
                <Cardt
                  title={el.name}
                  imgsrc={el.image}
                  body={Math.round(
                    el.price * (1 - categoryDiscounts["Dress"] / 100)
                  )}
                  onAddToCart={() => addToCart(el.name, quantities[el.name])}
                  isAdded={addedItems.includes(el.name)}
                ></Cardt>
              </div>
            ))}
        {obj.Jwellery === true &&
          showsarr
            .slice()
            .sort((a, b) =>
              sortingOrder === "lowToHigh"
                ? a.price - b.price
                : sortingOrder === "highToLow"
                ? b.price - a.price
                : 0
            )
            .map((el) => (
              <div id="child_menu1" key={el.id}>
                <Cardt
                  title={el.name}
                  imgsrc={el.image}
                  body={Math.round(
                    el.price * (1 - categoryDiscounts["Jwellery"] / 100)
                  )}
                  onAddToCart={() => addToCart(el.name)}
                  isAdded={addedItems.includes(el.name)}
                />
              </div>
            ))}
        {obj.Cosmetic === true &&
          showtarr
            .slice()
            .sort((a, b) =>
              sortingOrder === "lowToHigh"
                ? a.price - b.price
                : sortingOrder === "highToLow"
                ? b.price - a.price
                : 0
            )
            .map((el) => (
              <div id="child_menu1" key={el.id}>
                <Cardt
                  title={el.name}
                  imgsrc={el.image}
                  body={Math.round(
                    el.price * (1 - categoryDiscounts["Cosmetic"] / 100)
                  )}
                  onAddToCart={() => addToCart(el.name)}
                  isAdded={addedItems.includes(el.name)}
                />
              </div>
            ))}
        {obj.Watch === true &&
          showfoarr
            .slice()
            .sort((a, b) =>
              sortingOrder === "lowToHigh"
                ? a.price - b.price
                : sortingOrder === "highToLow"
                ? b.price - a.price
                : 0
            )
            .map((el) => (
              <div id="child_menu1" key={el.id}>
                <Cardt
                  title={el.name}
                  imgsrc={el.image}
                  body={Math.round(
                    el.price * (1 - categoryDiscounts["Watch"] / 100)
                  )}
                  onAddToCart={() => addToCart(el.name)}
                  isAdded={addedItems.includes(el.name)}
                />
              </div>
            ))}
        {obj.Electronics === true &&
          showfiarr
            .slice()
            .sort((a, b) =>
              sortingOrder === "lowToHigh"
                ? a.price - b.price
                : sortingOrder === "highToLow"
                ? b.price - a.price
                : 0
            )
            .map((el) => (
              <div id="child_menu5" key={el.id}>
                <Cardt
                  title={el.name}
                  imgsrc={el.image}
                  body={Math.round(
                    el.price * (1 - categoryDiscounts["Electronics"] / 100)
                  )}
                  onAddToCart={() => addToCart(el.name)}
                  isAdded={addedItems.includes(el.name)}
                />
              </div>
            ))}
      </div>
      <RecommendedItems
        recommendedItems={recommendedItems}
        categoryDiscounts={categoryDiscounts}
        addToCart={addToCart}
        addedItems={addedItems}
      />
      {showAddedItems && (
        <div className="added-items">
          <h2>Added Items</h2>
          <ul className="added-items-list">
            {addedItemsList.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <img src={item.image} alt={item.name} />
                <span>{item.price}</span>
                <button id="menu-part" onClick={() => handleDeleteItem(item)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menupage;
