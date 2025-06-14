// slices/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface demoState {
  value: number;
}

const initialState: demoState = {
  value: 0,
};

const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    demoMethod: (state, action) => {
      state.value=action.payload
    },
  },
});

export const { demoMethod } = demoSlice.actions;

export default demoSlice.reducer;
