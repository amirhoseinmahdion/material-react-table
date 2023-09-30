import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loding: false,
};

export const loadingSlice = createSlice({
  name: "Loading",
  initialState,
  reducers: {
    showloading: (state) => {
      state.loding = true;
    },
    unshowloadnig: (state) => {
      state.loding = false;
    },
  },
});

export const { showloading, unshowloadnig } = loadingSlice.actions;
export default loadingSlice.reducer;
