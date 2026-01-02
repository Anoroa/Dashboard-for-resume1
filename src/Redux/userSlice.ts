import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  accessToken: "",
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    appendData: (state, action) => {
      state.username = action.payload.user.username;
      state.accessToken = action.payload.accessToken;
    },
  },
});

// Action creators are generated for each case reducer function
export const { appendData } = userSlice.actions;

export default userSlice.reducer;
