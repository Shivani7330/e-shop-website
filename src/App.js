// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import SignUpSignIn from "./pages/SignUpSignIn";
import Products from "./components/Products";
import ProductDetails from "./pages/ProductDetails";
import Women from "./pages/Women";
import Men from "./pages/Men"; 
import Wishlist from "./components/Wishlist";
import AddToCart from "./components/AddToCart";
import Shop from "./pages/shop";




const App = () => {
  const cartItemCount = 3; // Example static value
  const wishlistItemCount = 5; // Example static value
  
  return (
    <>
    <Router>
      
      <Navbar cartItemCount={cartItemCount} wishlistItemCount={wishlistItemCount} />
      <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/auth" element={<SignUpSignIn />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<AddToCart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
       </Routes>
     
       <Footer />
    </Router>
     
      </>
  );
};

export default App;
