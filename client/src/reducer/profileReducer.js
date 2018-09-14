import { IS_LOADING, GET_PROFILE, GET_ERRORS, CLEAR_CURRENT_PROFILE, CREATE_PROFILE } from "../types/types";

const initialState = {
  isLoading: false,
  profile: null,
  profiles: null
}

export const profileReducer = (state=initialState, action) => {
  switch(action.type){
    case IS_LOADING:
    return{
      ...state,
      isLoading: true
    }
    case GET_PROFILE:
    return{
      ...state,
      profile: action.payload,
      isLoading:false
    }
    case GET_ERRORS:
    return{
      ...state,
      errors: action.payload
    }
    case CLEAR_CURRENT_PROFILE:
    return{
      ...state
    }
    case CREATE_PROFILE:
    return{
      ...state,
      profile: action.payload,
      isLoading:false
    }
    default:
    return state
  }
}