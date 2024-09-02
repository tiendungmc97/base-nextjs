import { LoginData } from "@/interface/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  account: {
    email: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccount: (state, action: PayloadAction<LoginData>) => {
      state.token = action.payload.token;
      state.account.email = action.payload.email;
    },
  },
});

export const { updateAccount } = authSlice.actions;

export default authSlice.reducer;
