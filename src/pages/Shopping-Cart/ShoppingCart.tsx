import { useContext } from "react";
import Container from "rsuite/Container";
import Row from "rsuite/Row";
import Col from "rsuite/Col";
import Button from "rsuite/Button";

import { CartContextType, ShoppingCartContext } from "../../context/ShoppingCartProvider";
import { ICartItem } from "../../interfaces/IProduct";
import CartItem from "./Cart-item/CartItem";
import styles from "./ShoppingCart.module.css";
import { WalletIcon } from "../../common-ui/FontAwesome";

function ShoppingCart(): JSX.Element {
  const { cartState, updateQuantity, removeFromCart } = useContext(ShoppingCartContext) as CartContextType;
  let cart: ICartItem[] = cartState.cart;

  return (
    <Container className={styles.cartContainer}>
      <Row>
        <Col xs={24} smOffset={2} sm={20} mdOffset={4} md={16} lgOffset={8} lg={8}>
          <>
            <Row>
              <h1 className={styles.title}>Shopping Cart</h1>
            </Row>
            {cart && cart.length ? (
              cart.map((item: ICartItem, index: number) => (
                <CartItem key={item.id} updateQuantity={updateQuantity} removeFromCart={removeFromCart} {...item} />
              ))
            ) : (
              <Row className="card vertical-flex" style={{ alignItems: "center" }}>
                <p>
                  <strong>No items in the Cart.</strong>
                </p>
                <p>Please feel free to add something.</p>
              </Row>
            )}
            {cart && cart.length ? (
              <Row className="card space-between">
                <div>
                  Cart Total: <small>INR </small>
                  <strong>{cartState.cartTotal}</strong>
                </div>
                <div>
                  <Button appearance="primary" onClick={() => alert(`You know you can't affort it, just relax!!`)}>
                    <WalletIcon style={{ marginRight: "5px" }} />
                    Check Out
                  </Button>
                </div>
              </Row>
            ) : null}
          </>
        </Col>
      </Row>
    </Container>
  );
}

export default ShoppingCart;
