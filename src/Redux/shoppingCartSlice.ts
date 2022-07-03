import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import IProduct from "../interfaces/IProduct";

const initialState = {
  cartTotal: 0,
  cartItems: [],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      console.log("Cart redux received", action.payload);
    },
  },
});

export const { addToCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
