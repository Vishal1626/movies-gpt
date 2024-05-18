import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUserData: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUserData } = userSlice.actions;
export default userSlice.reducer;
