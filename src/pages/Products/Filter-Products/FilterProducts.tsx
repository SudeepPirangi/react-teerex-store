// import { useState } from "react";
import { Row, CheckboxGroup } from "rsuite";

import { IFilter } from "../../../interfaces/FilterInterfaces";
import FilterUnit from "./Filter/FilterUnit";
import filters from "../../../constants/filters-data";

function FilterProducts(): JSX.Element {
  // const [allFilters, setAllFilters] = useState(filters);
  return (
    <Row>
      <h2>Filter Products</h2>
      <CheckboxGroup name="checkboxList" className="filtersGroup">
        {filters.map((filter: IFilter) => (
          <FilterUnit key={filter.filterId} {...filter} />
        ))}
      </CheckboxGroup>
    </Row>
  );
}

export default FilterProducts;
