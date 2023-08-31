import React from "react";
import Cardt from "./card";

function RecommendedItems({ recommendedItems, categoryDiscounts, addToCart, addedItems }) {
  const containerStyle = {
    display: "flex",  
    overflowX: "auto",
    justifyContent:"space-evenly",     
    padding: "20px 0",     
  };

  const cardStyle = {
    flex: "0 0 calc(15% - 20px)", 
    margin: "0 10px",      
  };
  const imageStyle = {
    width: "200%",
    height: "auto", 
  };
  return (
    <div className="recommendation-section">
      <h2>Recommended for You</h2>
      <div style={containerStyle}>
        {recommendedItems.map((el) => (
          <div style={cardStyle} key={el.id}>
            <Cardt
              title={el.name}
              imgsrc={el.image}
              body={Math.round(el.price * (1 - categoryDiscounts[el.category] / 100))}
              onAddToCart={() => addToCart(el)}
              isAdded={addedItems.some((addedItem) => addedItem.name === el.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedItems;
