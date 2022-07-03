import { createContext } from "react";

import IProduct from "../interfaces/IProduct";
import { InitialCartType, ActionTypes } from "./ShoppingCartReducer";
import { useShoppingCartReducer } from "../custom-hooks/useShoppingCartReducer";

export type AddToCartFunctionType = (product: IProduct) => void;
export type UpdateFunctionType = (productId: number, operation: string) => void;
export type RemoveFromCartFunctionType = (productId: number) => void;

export type CartContextType = {
  cartState: InitialCartType;
  addToCart: AddToCartFunctionType;
  updateQuantity: UpdateFunctionType;
  removeFromCart: RemoveFromCartFunctionType;
};

export const ShoppingCartContext = createContext<CartContextType | null>(null);

function ShoppingCartProvider(props: any): JSX.Element {
  const [cartState, cartDispatch] = useShoppingCartReducer();

  const addToCart = (product: IProduct) => {
    cartDispatch({ type: ActionTypes.ADD_TO_CART, payload: product });
  };

  const updateQuantity = (productId: number, operation: string) => {
    cartDispatch({ type: ActionTypes.UPDATE_QUANTITY, payload: { productId, operation } });
  };

  const removeFromCart = (productId: number) => {
    cartDispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: productId });
  };

  return (
    <ShoppingCartContext.Provider value={{ cartState, addToCart, updateQuantity, removeFromCart }}>{props.children}</ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
