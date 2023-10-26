import { createAsyncThunk } from "@reduxjs/toolkit";



export const getCategories = createAsyncThunk(
  'getCategories',
  ()=>{
    const categories = fetch("http://localhost:3005/productCategories")
    .then((res)=>res.json());
    return categories;
  }
)   