import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS file

const Login = () => {
  const [Mobileno, setMobileno] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        Mobileno,
        Password,
      });

      if (response.data.success) {
        setMessage("Login successful! Redirecting...");
        setTimeout(() => navigate("/order"), 2000); // Redirect to Order Page
      } else {
        setMessage("Invalid login credentials. Try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setMessage("Error logging in. Please try again.");
    }
  };


  return (
<div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Mobile Number:</label>
        <input
          type="text"
          value={Mobileno}
          onChange={(e) => setMobileno(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="signup-btn">Login</button>

        <p className="signup-text">
          New User? <span onClick={() => navigate("/Signup")} className="signup-link">Sign Up</span>
        </p>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
