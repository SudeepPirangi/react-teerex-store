import IProduct, { ICartItem } from "./IProduct";

export default interface ShoppingCartImpl {
  cart: ICartItem[];
  cartTotal: number;
}
