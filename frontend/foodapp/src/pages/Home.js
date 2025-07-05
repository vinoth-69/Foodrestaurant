import React from "react";
import { useNavigate,Link } from "react-router-dom";
import "./Home.css";
import backgroundImage from "./images/resbg1.jpg"; // Ensure you have an image in the correct path
import logo from "./images/foodlogo.jpg"; // Ensure you have a logo image
import img1 from './images/pizza.jpeg';


const HomePage = () => {
  const navigate = useNavigate();
  
  
   
  

  return (
    // <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
    //   <nav className="navbar">
    //     <div className="logo">
    //       <img src={logo} alt="Restaurant Logo" />
    //     </div>
    //     <div className="title">Restaurant App</div>
    //     <ul className="nav-links">
    //       <li onClick={() => navigate("/")}>Home</li>
    //       <li onClick={() => navigate("/login")}>Login</li>
    //       <li onClick={() => navigate("/Signup")}>Cart</li>
    //   </ul>
          
      
    //   </nav>
    //   <div>
    <div className="home-container">
    <header className="hero-section">
      {/* <backgroundImage={img1} 
    
        alt="Delicious food" 
        className="hero-image"
      /> */}
      <h1 className="restaurant-name">Delicious Bites Restaurant</h1>
    </header>
    
    <section className="description-section">
      <h2>Welcome to Delicious Bites</h2>
      <p>
        At Delicious Bites, we offer an unforgettable dining experience, combining mouth-watering dishes 
        with an inviting atmosphere. Whether you're here for a casual meal or a special celebration, 
        our expertly crafted menu will ensure you leave satisfied.
      </p>
      <p>
        From local delicacies to international favorites, we provide a variety of dishes made with 
        only the finest ingredients. Come visit us today and indulge in a culinary journey like no other!
      </p>
    </section>
    
    <section className="contact-section">
      <h2>Contact Us</h2>
      <ul>
        <li><strong>Address:</strong> 123 Foodie Street, Gourmet City</li>
        <li><strong>Phone:</strong> (123) 456-7890</li>
        <li><strong>Email:</strong> info@deliciousbites.com</li>
      </ul>
    </section>
    
    <footer className="footer">
      <p>&copy; 2025 Delicious Bites Restaurant. All rights reserved.</p>
    </footer>
  </div>
      
      
      
        
      
      
             
            
    
  );
};

export default HomePage;
