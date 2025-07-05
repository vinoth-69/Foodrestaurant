import React from "react";
import img1 from './images/pizza.jpeg';
const FoodCard = ({ food }) => {
  return (
    <div style={cardStyle}>
      <img src={img1} alt={food.name} style={imageStyle} />
      <h2>{food.name}</h2>
      <p>{food.description}</p>
      <p>⭐ {food.rating} / 5</p>
    </div>
  );
};

// Styles
const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "15px",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  width: "250px",
  background: "#fff",
};

const imageStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "8px",
};

export default FoodCard;
