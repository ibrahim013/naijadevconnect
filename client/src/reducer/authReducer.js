import isEmpty from "../validator/is-empty";
import { SET_USER_DATA } from "../types/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
};
