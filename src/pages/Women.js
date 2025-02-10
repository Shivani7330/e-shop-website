import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart } from "../redux/cartSlice";
import { removeFromWishlist, addToWishlist } from "../redux/wishlistSlice";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaStar, FaRegStar } from "react-icons/fa";
import "../styles/Women.css"; // Import the CSS file

const Women = () => {
  const [womenProducts, setWomenProducts] = useState([]);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((data) => setWomenProducts(data));
  }, []);

  const handleWishlistToggle = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleCartToggle = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Women's Clothing</h2>

      {/* Grid Layout - 2 products per row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {womenProducts.map((product) => (
          <div
            key={product.id}
            style={{
              width: "48%", // Ensures 2 products per row
              marginBottom: "20px",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "120px", marginTop: "50px", objectFit: "contain" }}
            />

            <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>
              {product.title}
            </h3>

            <div style={{ display: "flex", justifyContent: "center" }}>
              {[...Array(5)].map((_, index) =>
                index < Math.round(product.rating?.rate) ? (
                  <FaStar key={index} color="gold" />
                ) : (
                  <FaRegStar key={index} color="gray" />
                )
              )}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
                ${product.price}
              </p>

              <button
                style={{ background: "none", border: "none", cursor: "pointer" }}
                onClick={() => handleWishlistToggle(product)}
              >
                {wishlist.some((item) => item.id === product.id) ? (
                  <AiFillHeart color="red" size={24} />
                ) : (
                  <AiOutlineHeart color="gray" size={24} />
                )}
              </button>
            </div>

            <button
              style={{
                width: "100%",
                padding: "8px",
                backgroundColor: "orange",
                color: "white",
                borderRadius: "5px",
                border: "none",
                marginTop: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleCartToggle(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
