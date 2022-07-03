import { useReducer } from "react";
import { cartInitialState, cartReducer } from "../context/ShoppingCartReducer";

export function useShoppingCartReducer() {
  return useReducer(cartReducer, cartInitialState);
}
