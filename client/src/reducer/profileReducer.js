import {
  IS_LOADING,
  GET_PROFILE,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  CREATE_PROFILE,
  DELETE_CURRENT_USER,
  ADD_NEW_EXPERIENCE,
  ADD_NEW_EDUCATION,
  DELETE_EXPERIENCE,
  GET_ALL_PROFILES
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
    case GET_ALL_PROFILES:
    return{
      ...state,
      profiles: action.payload,
      isLoading: false
    };
      case ADD_NEW_EXPERIENCE:
      return{
        ...state,
        profile:action.payload
      }
      case ADD_NEW_EDUCATION:
      return{
        ...state,
        profile:action.payload
      }
      case DELETE_EXPERIENCE:
      return {
        ...state,
        profile: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
