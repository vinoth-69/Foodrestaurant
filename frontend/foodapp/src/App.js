import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Login from './pages/Login';
import OrderPage from './pages/OrderPage';
import Table from './pages/table';
function App() {

  // useEffect(()=>
  // {
  //   fetch('http://localhost:3000/getitem')
  //   .then(res=>res.json())
  //   .then(data=>setItems(items))
  // },[])
 
  
  
    return (
      <Router>
      
            <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />

          <Route path="/order" element={<OrderPage />} />
          <Route path="/tables" element={<Table />} />

          
                {/* <Route path='/link1' element={<Indian />} />
                <Route path='/link2' element={<Chinese />} />
                <Route path='/link3' element={<Beverages />} />
                <Route path='/link4' element={<Chatlist />} /> */}
              

            
        </Routes>
       
      </Router>
    );
  }
  
  

export default App;
