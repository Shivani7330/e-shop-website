

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import ProductCard from "../pages/ProductCard";

import { Link } from "react-router-dom";
import styles from "../styles/Products.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [filteredProducts, setFilteredProducts] = useState([]);

 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products.slice(0, 20)); // Display only 10 products
  }, [products]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Our Products</h1>
      <div className={styles["product-grid"]}>
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => 
            product ? <ProductCard key={product.id} product={product} /> : null
          )
        ) : (
          <p className={styles["no-products"]}>No products available</p>
        )}
      </div>
      <div className="text-center mt-6">
        <Link to="/products" className="text-blue-500 hover:underline">View All Products</Link>
      </div>
    </div>



  );
};

export default Products;




































