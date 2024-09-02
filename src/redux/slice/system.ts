import { LoginData } from "@/interface/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  theme: "",
};

export const systemSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateSystem: (state, action: PayloadAction<any>) => {
      state.theme = action.payload;
    },
  },
});

export const { updateSystem } = systemSlice.actions;

export default systemSlice.reducer;
