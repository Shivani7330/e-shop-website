


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import "../styles/Navbar.css";




const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const wishlist = useSelector((state) => state.wishlist.items);
  const cart = useSelector((state) => state.cart.items);

  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
 

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/products" className="navbar-logo">E-Shop</Link>


        <div className="nav-links">
        <Link to="/women" className="nav-link"> Women</Link>
        <Link to="/men" className="nav-link"> Men</Link>
          
          <Link to="/products" className="nav-link">Products</Link>
        </div>

        <div className="search-login">
         
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search products..."
              className="search-input"
            />

<button className="search-button">
            <FaSearch />
          </button>
         
          <Link to="/auth" className="login-button">Login</Link>

          <Link to="/wishlist" className="nav-link">
            <FaHeart color={wishlist.length > 0 ? "red" : "white"} />
            <span className="nav-item-count">{wishlist.length}</span>
          </Link>
          <Link to="/cart" className="nav-link">
            <FaShoppingCart color={cart.length > 0 ? "blue" : "white"} />
            <span className="nav-item-count">{cart.length}</span>
          </Link>
        </div>
      </div>
    </nav>
    
   </>
   
  );

};


export default Navbar;
