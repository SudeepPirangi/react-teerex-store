import { useContext } from "react";
import Button from "rsuite/Button";

import { CartContextType, ShoppingCartContext } from "../../../context/ShoppingCartProvider";
import { CartIcon } from "../../../common-ui/FontAwesome";
import IProduct from "../../../interfaces/IProduct";
import styles from "./Product.module.css";

function Product(props: any): JSX.Element {
  const { addToCart } = useContext(ShoppingCartContext) as CartContextType;
  const product: IProduct = props.product;

  return (
    <div className={styles.productCard}>
      <div className="productNameImage">
        <span className="productName">{product.name}</span>
        <img className={styles.productImage} src={product.imageURL} alt={product.name} />
      </div>
      <div className={styles.productDetails}>
        <span className="product-price">
          <small>{product.currency}</small> <strong>{product.price}</strong>
        </span>
        <Button appearance="primary" onClick={() => addToCart(product)}>
          <CartIcon /> Buy
        </Button>
      </div>
    </div>
  );
}

export default Product;
