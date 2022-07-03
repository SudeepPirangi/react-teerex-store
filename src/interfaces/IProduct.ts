export interface IProductSpecific {
  color?: string;
  currency: string;
  gender?: string;
  id: number;
  imageURL: string;
  name: string;
  price: number;
  quantity: number;
  type?: string;
}
export interface ICartItem extends IProductSpecific {
  selectedQuantity: number;
  priceInCart: number;
}

export default interface IProduct {
  [key: string]: string;
}
