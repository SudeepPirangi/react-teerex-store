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

export const applyFilters = (store: any): [IProduct[], IFilterMap] => {
  const { products, appliedFilters: filters } = store;
  let filteredProducts: IProduct[] = [];
  filteredProducts = colourFilter(products, filters.colour);
  filteredProducts = genderFilter(filteredProducts, filters.gender);
  filteredProducts = priceFilter(filteredProducts, filters.price);
  filteredProducts = typeFilter(filteredProducts, filters.type);
  return [filteredProducts, filters];
};

const colourFilter = (products: IProduct[], colors: string[]): IProduct[] => {
  if (!colors.length) return products;
  let newProducts: IProduct[] = [];
  colors.forEach((color: string) => {
    let resultedProducts = products.filter((product: IProduct): boolean => product.color.toLowerCase() === color);
    newProducts = [...newProducts, ...resultedProducts];
  });
  return newProducts;
};

const genderFilter = (products: IProduct[], genders: string[]): IProduct[] => {
  if (!genders.length) return products;
  let newProducts: IProduct[] = [];
  genders.forEach((gender: string) => {
    let resultedProducts = products.filter((product: IProduct): boolean => product.gender.toLowerCase() === gender);
    newProducts = [...newProducts, ...resultedProducts];
  });
  return newProducts;
};

const priceFilter = (products: IProduct[], priceRanges: string[]): IProduct[] => {
  if (!priceRanges.length) return products;
  let newProducts: IProduct[] = [];
  priceRanges.forEach((range: string) => {
    let [min, max] = range.split("-");
    let resultedProducts = products.filter((product: IProduct): boolean => {
      if (max === "X") {
        return product.price >= +min;
      }
      return product.price >= +min && product.price <= +max;
    });
    newProducts = [...newProducts, ...resultedProducts];
  });
  return newProducts;
};

const typeFilter = (products: IProduct[], types: string[]): IProduct[] => {
  if (!types.length) return products;
  let newProducts: IProduct[] = [];
  types.forEach((type: string) => {
    let resultedProducts = products.filter((product: IProduct): boolean => product.type.toLowerCase() === type);
    newProducts = [...newProducts, ...resultedProducts];
  });
  return newProducts;
};

export const testingFunction = (prods: IProduct[], filters: IFilterMap) => {
  console.log("prods", prods);
  console.log("filters", filters);
};
