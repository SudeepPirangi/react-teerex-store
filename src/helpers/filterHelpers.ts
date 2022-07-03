import { IFilter, IFilterMap } from "../interfaces/FilterInterfaces";
import IProduct from "../interfaces/IProduct";

export const setFilters = (staticFilter: IFilter[]): IFilterMap => {
  const filters: IFilterMap = {};
  staticFilter.forEach((filter: IFilter) => {
    filters[filter.filterId] = [];
  });
  return filters;
};

export const updateFilters = (filters: IFilterMap, payload: any): IFilterMap => {
  if (payload.isChecked) {
    filters[payload.filterId].push(payload.optionId);
  } else {
    let tempArray = filters[payload.filterId];
    let index = tempArray.findIndex((option: string) => option === payload.optionId);
    if (index > -1) {
      tempArray.splice(index, 1);
      filters[payload.filterId] = [...tempArray];
    }
  }
  return filters;
};

export const filterAllProducts = (filteredProducts: IProduct[], unfilteredProducts: IProduct[]): any => {
  let filtered = [...filteredProducts];
  let unfiltered = [...unfilteredProducts];

  // inner helper function to apply/revoke filter of color, gender, type properties
  const genericFilter = (filterId: string, optionId: string, isChecked: string): void => {
    if (isChecked) {
      filtered = filtered.filter((product: IProduct): boolean => {
        let doesMatch: boolean = product[filterId].toLowerCase() === optionId;
        if (!doesMatch) unfiltered.push(product);
        return doesMatch;
      });
    } else {
      unfiltered = unfiltered.filter((product: IProduct): boolean => {
        let doesMatch: boolean = product[filterId].toLowerCase() === optionId;
        if (!doesMatch) filtered.push(product);
        return doesMatch;
      });
    }
  };

  // inner helper function to apply/revoke filter of price properties
  const priceFilter = (optionId: string, isChecked: string): void => {
    let [min, max] = optionId.split("-");
    let doesMatch = false;
    if (isChecked) {
      filtered = filtered.filter((product: IProduct): boolean => {
        if (max === "X") {
          doesMatch = +product.price >= +min;
        } else {
          doesMatch = +product.price >= +min && +product.price <= +max;
        }
        if (!doesMatch) unfiltered.push(product);
        return doesMatch;
      });
    } else {
      unfiltered = unfiltered.filter((product: IProduct): boolean => {
        if (max === "X") {
          doesMatch = +product.price >= +min;
        } else {
          doesMatch = +product.price >= +min && +product.price <= +max;
        }
        if (!doesMatch) filtered.push(product);
        return doesMatch;
      });
    }
  };

  // a closure function returning manipulated products
  return (filterObj: any): [IProduct[], IProduct[]] => {
    let { filterId, optionId, isChecked } = filterObj;
    if (filterId !== "price") {
      genericFilter(filterId, optionId, isChecked);
    } else {
      priceFilter(optionId, isChecked);
    }
    return [filtered, unfiltered];
  };
};
