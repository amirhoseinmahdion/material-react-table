import { configureStore } from "@reduxjs/toolkit";
import loadingreducer from "./productslice/slice";

export const store = configureStore({
  reducer: {
    product: loadingreducer,
  },
});
