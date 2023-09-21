import { configureStore } from "@reduxjs/toolkit";
import ProductReducer, { fetchProducts } from "../slices/ProductSlice";
import CartReducer, { getTotal } from "../slices/CartSlice";

export const store = configureStore({
    reducer: {
        products: ProductReducer,
        cart: CartReducer
    }
});

store.dispatch(fetchProducts());
store.dispatch(getTotal());