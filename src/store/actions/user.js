export const SET_USER = "SET_USER";

export const setUser = (username) => {
  return { type: SET_USER, user: username };
};
