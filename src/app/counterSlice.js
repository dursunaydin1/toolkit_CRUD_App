import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    arttır: (state, action) => {
      state.counter += 1;
    },
    azalt: (state, action) => {
      state.counter -= 1;
    },
  },
});

export const { arttır, azalt } = counterSlice.actions;
export default counterSlice.reducer;
