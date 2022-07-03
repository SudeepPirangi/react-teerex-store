// import { useState } from "react";
import { Row, CheckboxGroup } from "rsuite";

import { IFilter } from "../../../interfaces/FilterInterfaces";
import FilterUnit from "./Filter/FilterUnit";
import filters from "../../../constants/filters-data";
import styles from "./FilterProducts.module.css";

function FilterProducts(): JSX.Element {
  // const [allFilters, setAllFilters] = useState(filters);
  return (
    <Row className={styles.mobileFilter}>
      <h2 className={styles.title}>Filter Products</h2>
      <CheckboxGroup name="checkboxList" className={styles.filtersGroup}>
        {filters.map((filter: IFilter) => (
          <FilterUnit key={filter.filterId} {...filter} />
        ))}
      </CheckboxGroup>
    </Row>
  );
}

export default FilterProducts;
