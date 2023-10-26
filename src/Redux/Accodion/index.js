import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "Kids",
    items: ["Card Games", "Board Games"]
  },
  {
    category: "Teens",
    items: ["Card Games", "Board Games"]
  },
  {
    category: "Adults",
    items: ["Card Games", "Board Games"]
  }
]

const accordionSlice = createSlice({
  name: "AccordionSlice",
  initialState
})

export default accordionSlice;