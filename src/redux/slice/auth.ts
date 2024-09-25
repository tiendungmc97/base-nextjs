import { Account, LoginData } from "@/interface/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  refreshToken: "",
  expireTime: "",
  account: {
    accessToken: "",
    refreshToken: "",
    expireTime: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccount: (state, action: PayloadAction<Account>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.expireTime = action.payload.expireTime;
      state.account = action.payload;
    },
  },
});

export const { updateAccount } = authSlice.actions;

export default authSlice.reducer;
