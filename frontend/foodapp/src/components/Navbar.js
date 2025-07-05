import React from "react";
import { useNavigate} from "react-router-dom";
import logo from '../pages/images/foodlogo.jpg';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    
    
    <nav className="navbar">
    
        <div className="logo">
          <img src={logo} alt="Restaurant Logo" />
        </div>
         <div className="title">Food Restaurant App</div>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/signup")}>Cart</button>
      {/* <button onClick={() => navigate("/foods")}>FoodList</button>  */}
                         
    </nav>
    
    
  );
};

export default Navbar;
