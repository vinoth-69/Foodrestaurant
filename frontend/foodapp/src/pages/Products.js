import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/foodlist") // Fetch from backend
      .then(response => {
        console.log("API Response:", response.data); // ✅ Log response data
        setItems(Array.isArray(response.data) ? response.data : []); // ✅ Ensure it's an array
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);
  

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Rating: ⭐ {item.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
