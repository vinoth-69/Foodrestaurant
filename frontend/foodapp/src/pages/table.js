import React, { useState } from "react";
import axios from "axios";
import "./Table.css";

const Table = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [message, setMessage] = useState("");

  const tables = [1, 2, 3, 4, 5, 6, 7, 8,9,10]; // Example table numbers

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/booktable", {
        name,
        phone,
        tableNumber,
      });

      if (response.data.success) {
        setMessage(`Table ${tableNumber} booked successfully!`);
        setName("");
        setPhone("");
        setTableNumber("");
      } else {
        setMessage("Error booking table. Try again.");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      setMessage("Error booking table. Please try again.");
    }
  };

  return (
    <div className="table-container">
      <h2>Book a Table</h2>
      <form onSubmit={handleBooking}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>Select Table:</label>
        <div className="table-buttons">
          {tables.map((table) => (
            <button
              key={table}
              type="button"
              className={`table-btn ${
                tableNumber === table ? "selected" : ""
              }`}
              onClick={() => setTableNumber(table)}
            >
              Table {table}
            </button>
          ))}
        </div>

        <button type="submit" className="book-btn">Book Now</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Table;
