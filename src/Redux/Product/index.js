import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    pName:"Monopoly",
    price: 45,
    img: "game-1.jpg"
  },
  {
    pName:"Jenga",
    price: 15,
    img: "game-2.jpg"
  },
  {
    pName:"Checkers",
    price: 10,
    img: "game-3.jpg"
  },
  {
    pName:"Connect 4",
    price: 8,
    img: "game-4.jpg"
  },
  {
    pName:"Sorry!",
    price: 20,
    img: "game-5.jpg"
  },
]

const productSlice = createSlice({
  name: "Products",
  initialState
})

export default productSlice;