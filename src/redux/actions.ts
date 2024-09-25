export const LOGOUT = "LOGOUT";

export const logout = () => {
  return (dispatch: any) => {
    dispatch({ type: LOGOUT });
  };
};
