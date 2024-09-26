"use client";
import { authPersistConfig } from "@/config/reduxPersist";
import authReducer from "@/redux/slice/auth";
import systemReducer from "@/redux/slice/system";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { LOGOUT } from "./actions";

const appReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  system: systemReducer,
});

// Root reducer to handle logout
export const rootReducer = (state: any, action: any) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};
