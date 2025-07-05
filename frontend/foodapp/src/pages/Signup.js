import { useState } from "react";
import axios from "axios";
import './signup.css';
const Signup = () => {
  const [Mobileno, setMobileno] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/signup", {
        Mobileno,
        Password,
      });

      console.log("Response:", response.data); // ✅ Log response for debugging
      setMessage(response.data.message || "Signup successful!");

      // ✅ Clear input fields
      setMobileno("");
      setPassword("");
    } catch (error) {
      console.error("Signup Error:", error.response ? error.response.data : error.message);
      setMessage(error.response ? error.response.data.error : "Error signing up. Try again.");
    }
  };

  return (
<div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
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

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>

  );
};

export default Signup;
