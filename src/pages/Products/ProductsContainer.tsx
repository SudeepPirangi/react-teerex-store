import { useState } from "react";
import Container from "rsuite/Grid";
import Row from "rsuite/Row";
import Col from "rsuite/Col";

import SearchProducts from "./Search-Products/SearchProducts";
import FilterProducts from "./Filter-Products/FilterProducts";
import Products from "./Products";
import styles from "./Products.module.css";

function ProductsContainer(): JSX.Element {
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const toggleMobileFilter = () => {
    setShowMobileFilter((prevStatus) => !prevStatus);
  };

  return (
    <Container fluid>
      <Row>
        <Col xsHidden sm={8} md={6} lg={4} className="desktopFilters">
          <FilterProducts />
        </Col>
        <Col xs={24} sm={16} md={18} lg={20} className="productsAndSearch">
          <Row>
            <SearchProducts toggler={toggleMobileFilter} />
          </Row>

          {showMobileFilter ? (
            <Row>
              <Col xs={24} smHidden mdHidden lgHidden xlHidden xxlHidden className="mobileFilters">
                <FilterProducts />
              </Col>
            </Row>
          ) : null}

          <Row className={styles.productsContainer}>
            <Products />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductsContainer;
