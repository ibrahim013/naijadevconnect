import {
  IS_LOADING,
  GET_PROFILE,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  CREATE_PROFILE,
  DELETE_CURRENT_USER,
  ADD_NEW_EXPERIENCE
} from "../types/types";

const initialState = {
  isLoading: false,
  profile: null,
  profiles: null
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        isLoading: false
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state
      };
    case CREATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
        isLoading: false
      };
    case DELETE_CURRENT_USER:
      return {
        ...state
      };
      case ADD_NEW_EXPERIENCE:
      return{
        ...state,
        profile:action.payload
      }
    default:
      return state;
  }
};
