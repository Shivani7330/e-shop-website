import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice'; // Import wishlist reducer
import productsReducer from "./productsSlice";



const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    wishlist: wishlistReducer, // Ensure wishlist is correctly added here
  },
});

export default store;
