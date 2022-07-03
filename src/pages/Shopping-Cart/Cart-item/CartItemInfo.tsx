import ButtonGroup from "rsuite/ButtonGroup";
import Button from "rsuite/Button";

import { MinusIcon, PlusIcon, TrashIcon } from "../../../common-ui/FontAwesome";
import CONSTANTS from "../../../constants/constants";
import styles from "./CartItem.module.css";

function CartItemInfo(props: any) {
  const { id, name, quantity, selectedQuantity } = props;
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
    <>
      <div className={styles.cartItemInfo} style={{ flex: "1" }}>
        <strong>{name}</strong>
      </div>
      <div className={styles.buttonsGroup}>
        <ButtonGroup size="xs" style={{ marginBottom: "5px" }}>
          <Button appearance="ghost" disabled={selectedQuantity === 1 ? true : false} onClick={decrementQuantity}>
            <MinusIcon />
          </Button>
          <Button appearance="ghost">{selectedQuantity}</Button>
          <Button appearance="ghost" disabled={selectedQuantity === quantity ? true : false} onClick={incrementQuantity}>
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <Button color="red" appearance="primary" size="xs" onClick={() => props.removeFromCart(id)}>
          <TrashIcon />
          Remove
        </Button>
      </div>
    </>
  );
}

export default CartItemInfo;
