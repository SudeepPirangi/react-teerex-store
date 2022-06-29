import { useDispatch, useSelector } from "react-redux";
import Checkbox from "rsuite/Checkbox";

import { updateFilters } from "../../../../helpers/filterHelpers";
import { IFilter, IFilterMap, IFilterOption } from "../../../../interfaces/FilterInterfaces";
import IProduct from "../../../../interfaces/IProduct";
import { filterProducts } from "../../../../Redux/productsSlice";
import { RootState } from "../../../../Redux/store";

import styles from "./FilterUnit.module.css";

type ValueType = string | number;

function FilterUnit(props: IFilter): JSX.Element {
  const products: IProduct[] = useSelector((state: RootState) => state.filteredProducts);
  const appliedFilters: IFilterMap = useSelector((state: RootState) => state.appliedfilters);
  const store = { products, appliedFilters };
  const dispatch = useDispatch();

  const { filterId, filter, options } = props;

  const filterChange = (optionId: ValueType | undefined, isChecked: boolean): void => {
    let appliedFilters_copy: IFilterMap = JSON.parse(JSON.stringify(appliedFilters));
    let store_copy: any = JSON.parse(JSON.stringify(store));
    store_copy.appliedFilters = updateFilters(appliedFilters_copy, { filterId, optionId, isChecked });
    dispatch(filterProducts(store_copy));
  };

  return (
    <div key={filterId} className={styles.filterUnit}>
      <p className="filterTitle">{filter}</p>
      {options.map((option: IFilterOption) => (
        <Checkbox key={option.optionId} value={option.optionId} checked={option.isChecked} onChange={filterChange}>
          {option.option}
        </Checkbox>
      ))}
    </div>
  );
}

export default FilterUnit;
