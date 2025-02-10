import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/cartSlice";
import { FaTrash } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Products from "../pages/Products";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold text-center mb-6">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1 px-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${item.price} x {item.quantity}</p>
                </div>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <div className="text-right mt-4">
              <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
            </div>
            <div className="text-center mt-6">
              <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Proceed to Checkout</Link>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty. <Link to="/products" className="text-blue-500 hover:underline">Browse Products</Link></p>
        )}
      </div>
      <Products />
    </>
  );
};

export default CartPage;
