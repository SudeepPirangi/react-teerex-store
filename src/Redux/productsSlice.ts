import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import filters from "../constants/filters-data";
import IProduct from "../interfaces/IProduct";
import searchProductsByTerm from "../helpers/searchProductsByTerm";
import { filterAllProducts, setFilters } from "../helpers/filterHelpers";

const filteredProducts: IProduct[] = [];
const unfilteredProducts: IProduct[] = [];

const initialState = {
  filteredProducts,
  unfilteredProducts,
  appliedfilters: setFilters(filters),
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      console.log("all prods length", action.payload?.length);
      state.filteredProducts = [...action.payload];
    },
    searchProducts: (state, action: PayloadAction<string>) => {
      let searchTerm = action.payload?.toLowerCase();
      let filteredProducts: IProduct[] = [];
      let unfilteredProducts: IProduct[] = [];
      if (!searchTerm) {
        filteredProducts = [...state.unfilteredProducts, ...state.filteredProducts];
        unfilteredProducts = [];
      } else {
        [filteredProducts, unfilteredProducts] = searchProductsByTerm(state.filteredProducts, state.unfilteredProducts, searchTerm);
      }
      console.log("search result", filteredProducts.length, unfilteredProducts.length);
      state.filteredProducts = [...filteredProducts];
      state.unfilteredProducts = [...unfilteredProducts];
    },
    filterProducts: (state, action: PayloadAction<any>) => {
      let applyFilter = filterAllProducts(state.filteredProducts, state.unfilteredProducts);
      let [filtered, unfiltered] = applyFilter(action.payload);
      console.log("filterProducts", filtered.length, unfiltered.length);
      state.filteredProducts = [...filtered];
      state.unfilteredProducts = [...unfiltered];
    },
  },
});

export const { filterProducts, searchProducts, setProducts } = productsSlice.actions;

export default productsSlice.reducer;
