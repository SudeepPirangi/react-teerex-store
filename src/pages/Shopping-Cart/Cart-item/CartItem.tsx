import Row from "rsuite/Row";
import Divider from "rsuite/Divider";
import ButtonGroup from "rsuite/ButtonGroup";
import Button from "rsuite/Button";

import styles from "./CartItem.module.css";
import { MinusIcon, PlusIcon, TrashIcon } from "../../../common-ui/FontAwesome";
import CONSTANTS from "../../../constants/constants";

function CartItem(props: any): JSX.Element {
  const { currency, id, imageURL, name, priceInCart, quantity, selectedQuantity } = props;
  const incrementQuantity = () => {
    if (selectedQuantity < quantity) {
      props.updateQuantity(id, CONSTANTS.INCREMENT);
    }
  };
  const decrementQuantity = () => {
    if (selectedQuantity > 1) {
      props.updateQuantity(id, CONSTANTS.DECREMENT);
    }
  };
  return (
    <Row className={styles.cartItem} data-id={id}>
      <div className={styles.cartItemImg}>
        <img src={imageURL} alt={name} />
      </div>

      <Divider vertical className={styles.verticalDivider} />

      <div className={styles.cartItemInfo}>
        <div style={{ flex: "1" }}>
          <strong>{name}</strong>
        </div>
        <div className={styles.buttonsGroup}>
          <ButtonGroup size="xs">
            <Button appearance="ghost" disabled={selectedQuantity === 1 ? true : false} onClick={decrementQuantity}>
              <MinusIcon />
            </Button>
            <Button appearance="ghost">{selectedQuantity}</Button>
            <Button appearance="ghost" disabled={selectedQuantity === quantity ? true : false} onClick={incrementQuantity}>
              <PlusIcon />
            </Button>
          </ButtonGroup>
          <Button color="red" appearance="primary" size="xs" onClick={() => props.removeFromCart(id)}>
            <TrashIcon style={{ marginRight: "5px" }} />
            Remove
          </Button>
        </div>
      </div>

      <Divider vertical className={styles.verticalDivider} />

      <div className="fullyCenter">
        <p>
          <small>{currency}</small> <strong>{priceInCart}</strong>
        </p>
      </div>
    </Row>
  );
}

export default CartItem;
