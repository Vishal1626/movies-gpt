import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchToggle: false,
  },
  reducers: {
    toggleGptSearchBtn: (state, action) => {
      state.gptSearchToggle = !state.gptSearchToggle;
    },
  },
});

export const { toggleGptSearchBtn } = gptSlice.actions;
export default gptSlice.reducer;
