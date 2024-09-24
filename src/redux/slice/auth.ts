import { LoginData } from "@/interface/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import exp from "constants";

const initialState = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  expireTime: "2026-12-31T23:59:59Z",
  account: {
    email: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccount: (state, action: PayloadAction<LoginData>) => {},
  },
});

export const { updateAccount } = authSlice.actions;

export default authSlice.reducer;
