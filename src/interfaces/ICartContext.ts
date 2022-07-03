import IProduct, { ICartItem } from "./IProduct";

export default interface ICartContext {
  cartState: { cart: ICartItem[] };
  addToCart: { product: IProduct };
  updateQuantity: { productId: string; operation: string };
  removeFromCart: { productId: string };
}

export interface ICartState {
  cart: ICartItem[];
}
