import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistSlice";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "../styles/ProductCard.module.css"; // Import CSS module

const ProductCard = ({ product }) => {
  // ✅ Always call hooks at the top
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items); // Ensure `wishlist.items` exists
  const isInWishlist = wishlist?.some((item) => item.id === product.id);

  // ✅ Ensure product is not undefined AFTER hooks
  if (!product || Object.keys(product).length === 0) {
    return <p className="text-red-500">Product data is missing</p>;
  }

  const handleCart = () => {
    dispatch(addToCart(product));
  };

  const handleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className={styles["product-card"]}>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className={styles["product-image"]}
        />
      </Link>
      <div className="mt-2">
        <h3 className={styles["product-title"]}>{product.title}</h3>
        <div className={styles["product-rating"]}>
          <span className="text-yellow-500 flex">
            {[...Array(5)].map((_, index) =>
              index < Math.round(product.rating?.rate) ? (
                <FaStar key={index} />
              ) : (
                <FaRegStar key={index} />
              )
            )}
          </span>
          <span className={styles["rating-count"]}>
            ({product.rating?.count || 0})
          </span>
        </div>
        <div className={styles["price-container"]}>
          <div>
            <span className={styles["product-price"]}>${product.price}</span>
            <span className={styles["product-old-price"]}>
              ${(product.price * 1.2).toFixed(2)}
            </span>
          </div>
          <button onClick={handleWishlist} className={styles["wishlist-button"]}>
            {isInWishlist ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
        </div>
        <button onClick={handleCart} className={styles["add-to-cart"]}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
