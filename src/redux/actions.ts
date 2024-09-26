export const LOGOUT = "LOGOUT";
import { purgeAndRehydrate } from "./store";
export const logout = () => {
  return (dispatch: any) => {
    dispatch({ type: "LOGOUT" });
    purgeAndRehydrate();
    window.location.href = "/login";
  };
};
