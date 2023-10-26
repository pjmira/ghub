import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlice.js"
import productSlice from "../Products/productSlice.js";
import cartSlice from "../Cart/cartSlice.js";

export const store = configureStore({
  reducer:{
    categoryReducer : categorySlice,
    pr : productSlice,
    cr : cartSlice
  }
})