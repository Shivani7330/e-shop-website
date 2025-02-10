import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFromWishlist(product.id)); // Remove from wishlist after adding to cart
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Your Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p className="empty-cart-message">Your wishlist is empty.</p>
      
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow-md bg-white"
            >
              <Link to={`/product/${product.id}`}>
              <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "120px", marginTop: "50px", objectFit: "contain" }}
            />
                <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>
              {product.title}
            </h3>
              </Link>

              <div style={{ display: "flex", justifyContent: "center" }}>
              {[...Array(5)].map((_, index) =>
                index < Math.round(product.rating?.rate) ? (
                  <FaStar key={index} color="gold" />
                ) : (
                  <FaRegStar key={index} color="gray" />
                )
              )}
            </div>

            <p style={{ fontSize: "1rem", fontWeight: "bold", color:"red" }}>
                ${product.price}
              </p>


<div className="flex justify-between items-center mt-3">
  <button
  style={{ background: "none", border: "none", cursor: "pointer", color:"red", }}
    className="text-red-500"
    onClick={() => handleRemoveFromWishlist(product.id)}
  >
    <AiFillHeart size={24} />
  </button>

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
    className="bg-orange-500 text-white px-3 py-1 rounded-lg flex items-center"
    onClick={() => handleAddToCart(product)}
  >
    <FaShoppingCart className="mr-2" /> Add to Cart
  </button>
</div>

       

</div>
))}
</div>
      )}
    </div>
  );
};

export default Wishlist;
