import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "../styles/AddToCart.css";

const AddToCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
       <p className="empty-cart-message">Your cart is empty.</p>

      ) : (
        <div className="cart-grid">
          {cartItems.map((product) => (
            <div key={product.id} className="cart-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} className="cart-image" />
                <h3 className="cart-title">{product.title}</h3>
              </Link>
              <p className="cart-price">${product.price}</p>
              <button className="remove-button" onClick={() => handleRemoveFromCart(product.id)}>
                <FaTrash size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddToCart;
