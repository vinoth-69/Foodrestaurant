import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "../pages/FoodCard";

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/foods")
      .then(response => {
        setFoods(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching food items:", error);
        setError("Failed to load food items.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading food items...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={containerStyle}>
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

// Styles
const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  padding: "20px",
};

export default FoodList;
