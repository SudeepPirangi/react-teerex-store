import { configureStore } from "@reduxjs/toolkit";

import mainReducer from "./productsSlice";

export const store = configureStore({
  reducer: mainReducer,
});

export type RootState = ReturnType<typeof store.getState>;
