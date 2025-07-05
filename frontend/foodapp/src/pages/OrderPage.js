import React from "react";
import { useNavigate} from "react-router-dom";
const OrderPage = () => {
    const navigate = useNavigate();
    const handleReserveClick = () => {
        navigate("/tables"); // Redirects to TableFile.js
      };
  return (
    // <div style={{ textAlign: "center", padding: "50px" }}>
    //   <h1>Welcome to Your Order Page</h1>
    //   <p>Start ordering your favorite food now!</p>
    // </div>
    <div className="overlay">
    <h1>Welcome to Food Heaven</h1>
    <p>Delicious food, cozy ambiance, and great service.</p>
    <div className="buttons">
      <button className="order-btn">Order Now</button>
      <button className="reserve-btn" onClick={handleReserveClick}>
  Reserve a Table
</button>
    </div>
    </div>
  );
};

export default OrderPage;
