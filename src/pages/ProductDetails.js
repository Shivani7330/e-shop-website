import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistSlice";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items || []);
  const cart = useSelector((state) => state.cart.items || []);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const isInWishlist = wishlist.some((item) => item.id === Number(id));
  const isInCart = cart.some((item) => item.id === Number(id));

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`
)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);


  
  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleCartToggle = () => {
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h2>
      

      <div className="flex flex-col md:flex-row items-center gap-6">
      
        
      <img
  src={product.image}
  alt={product.title}
  style={{ width: "180px", height: "auto", marginTop: "50px", display:"block", margin:"50px auto"}}
  className="object-contain shadow-md rounded-md"
/>



        <div className="flex-1">
          <h1>Description</h1>
          <p className="text-gray-600 mb-3">{product.description}</p>
          <p className="text-xl font-semibold text-gray-900">${product.price}</p>

          <div className="flex gap-4 mt-4">


          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            {/* Wishlist Button */}
            <button
style={{backgroundColor:"orange", padding:"10px", fontSize:"20px"}}

              onClick={handleWishlistToggle}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                isInWishlist ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
              } hover:scale-105 transition-all`}
            >
              {isInWishlist ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
              {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* Cart Button */}
            <button

style={{backgroundColor:"orange", padding:"10px", fontSize:"20px"}}
              onClick={handleCartToggle}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                isInCart ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              } hover:scale-105 transition-all`}
            >
              <FaShoppingCart size={20} />
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
            <br></br> <br></br>

            <h2> Additional Information</h2>
            <p>Clothing serves not only as protection but also as a form of self-expression and identity.
Different fabrics have unique properties, such as breathability in cotton and warmth in wool.
Layering clothes helps in adapting to different weather conditions and fashion styles.
Traditional clothing varies across cultures, reflecting history, customs, and heritage.
Smart textiles with embedded technology are emerging, offering features like temperature control.
Properly fitted clothes enhance confidence and comfort in daily life.
Fast fashion provides affordable trends but raises concerns about sustainability and waste.
Investing in high-quality, timeless pieces reduces the need for frequent replacements.</p>
          </div>




          <Link
            to="/products"
            className="inline-block mt-4 text-blue-600 hover:underline"
            
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
