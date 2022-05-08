import { SET_USER } from "../actions/user";

const initialState = {
  name: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
