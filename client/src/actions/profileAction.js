import { IS_LOADING, GET_PROFILE, GET_ERRORS, CLEAR_CURRENT_PROFILE, CREATE_PROFILE } from "../types/types";
import axios from "axios";

//thunk
export const errors = (error) => {
  return {
    type: GET_ERRORS,
    payload: error
  };
};

export const isLoading = () => {
  return {
    type: IS_LOADING
  };
};

export const createProfile = (userProfile) => {
  return{
    type: CREATE_PROFILE,
   payload: userProfile
  }
}
export const getCurrentUserProfile = profile => {
  return {
    type: GET_PROFILE,
    payload: profile
  };
};

export const clearCurrentUserProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};

export const currentUserProfile = () => dispatch => {
  dispatch(isLoading());
  axios
    .get("/api/profile")
    .then(res => dispatch(getCurrentUserProfile(res.data)))
    .catch(err => {
      if (err.response.data.noprofile === "No profile found") {
        return dispatch(getCurrentUserProfile({}));
      }
      dispatch(errors(err.response.data))
    });
};

export const newUserProfile =(userData) => dispatch => {
axios.post('/api/profile/', userData).then((res)=>{
  if(res){
    dispatch(createProfile(res.data))
    return true;
  } 
}).catch(err=>(dispatch(errors(err.response.data))))

}