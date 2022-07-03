import IProduct, { ICartItem } from "../interfaces/IProduct";
import CONSTANTS from "../constants/constants";

export enum ActionTypes {
  ADD_TO_CART = "addToCart",
  UPDATE_QUANTITY = "updateQuantity",
  REMOVE_FROM_CART = "removeFromCart",
}
export type InitialCartType = {
  cart: ICartItem[];
  cartTotal: number;
};
export type CartReducer = { type: ActionTypes; payload: any };

export const cartInitialState: InitialCartType = {
  cart: [],
  cartTotal: 0,
};

const updatePriceAndQuantity = (cartItem: ICartItem, operation: string): ICartItem => {
  if (operation === CONSTANTS.INCREMENT) {
    cartItem.selectedQuantity = cartItem.selectedQuantity < cartItem.quantity ? cartItem.selectedQuantity + 1 : cartItem.selectedQuantity;
  } else if (operation === CONSTANTS.DECREMENT) {
    cartItem.selectedQuantity = cartItem.selectedQuantity > 0 ? cartItem.selectedQuantity - 1 : cartItem.selectedQuantity;
  }
  cartItem.priceInCart = cartItem.selectedQuantity * +cartItem.price;
  return cartItem;
};

const updateCartTotal = (cart: ICartItem[]): number => {
  return cart.reduce((total, cartItem) => (total += cartItem.priceInCart), 0);
};

export const cartReducer: React.Reducer<InitialCartType, CartReducer> = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      let cart: ICartItem[] = state.cart;
      const product: IProduct = action.payload;
      let index = cart.findIndex((cartItem) => cartItem.id === +product.id);
      if (index >= 0) {
        cart[index] = updatePriceAndQuantity(cart[index], CONSTANTS.INCREMENT);
      } else {
        cart.push({
          currency: product.currency,
          id: +product.id,
          imageURL: product.imageURL,
          name: product.name,
          price: +product.price,
          quantity: +product.quantity,
          selectedQuantity: 1,
          priceInCart: +product.price,
        });
      }
      return { ...state, cart, cartTotal: updateCartTotal(cart) };
    }

    case ActionTypes.UPDATE_QUANTITY: {
      let cart: ICartItem[] = state.cart;
      const productId = action.payload.productId;
      const operation = action.payload.operation;
      let index = cart.findIndex((item) => item.id === productId);
      if (index >= 0) {
        cart[index] = updatePriceAndQuantity(cart[index], operation);
      }
      return { ...state, cart, cartTotal: updateCartTotal(cart) };
    }

    case ActionTypes.REMOVE_FROM_CART: {
      let cart: ICartItem[] = state.cart;
      cart = cart.filter((product) => product.id !== action.payload);
      return { ...state, cart, cartTotal: updateCartTotal(cart) };
    }

    default:
      return state;
  }
};
