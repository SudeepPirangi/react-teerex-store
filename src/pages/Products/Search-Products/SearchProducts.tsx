import { useDispatch } from "react-redux";
import { Button, Col } from "rsuite";

import debouncer from "../../../helpers/debouncer";
import { searchProducts } from "../../../redux/productsSlice";
import { FilterIcon } from "../../../common-ui/FontAwesome";

import styles from "./SearchProducts.module.css";
import SearchInput from "../../../common-ui/AppInput";

function SearchProducts(props: any) {
  const dispatch = useDispatch();

  const searchAllProducts = (currentSearch: string) => {
    dispatch(searchProducts(currentSearch));
  };

  const searchFunction = debouncer(searchAllProducts, 1000);
  const triggerSearch = (currentSearch: string): void => {
    searchFunction(currentSearch);
  };

  return (
    <Col xs={24} smOffset={4} sm={16} mdOffset={6} md={12} lgOffset={8} lg={8} className={styles.searchBlock}>
      <Col className={styles.searchProducts}>
        <SearchInput size="lg" triggerSearch={triggerSearch} />
      </Col>
      <Col smHidden mdHidden lgHidden xlHidden xxlHidden>
        <Button appearance="primary" onClick={props.toggler}>
          <FilterIcon />
        </Button>
      </Col>
    </Col>
  );
}

export default SearchProducts;
