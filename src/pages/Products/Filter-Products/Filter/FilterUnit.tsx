import { useDispatch } from "react-redux";
import Checkbox from "rsuite/Checkbox";

import { IFilter, IFilterOption } from "../../../../interfaces/FilterInterfaces";
import { filterProducts } from "../../../../redux/productsSlice";

import styles from "./FilterUnit.module.css";

type ValueType = string | number;

function FilterUnit(props: IFilter): JSX.Element {
  const dispatch = useDispatch();

  const { filterId, filter, options } = props;

  const filterChange = (optionId: ValueType | undefined, isChecked: boolean): void => {
    dispatch(filterProducts({ filterId, optionId, isChecked }));
  };

  return (
    <div key={filterId} className={styles.filterUnit}>
      <p className={styles.filterTitle}>{filter}</p>
      {options.map((option: IFilterOption) => (
        <Checkbox key={option.optionId} value={option.optionId} checked={option.isChecked} onChange={filterChange}>
          {option.option}
        </Checkbox>
      ))}
    </div>
  );
}

export default FilterUnit;
