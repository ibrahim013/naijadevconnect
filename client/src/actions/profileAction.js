import {
  IS_LOADING,
  GET_PROFILE,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  CREATE_PROFILE,
  ADD_NEW_EXPERIENCE
} from "../types/types";
import axios from "axios";

//thunk
export const errors = error => {
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

export const createProfile = userProfile => {
  return {
    type: CREATE_PROFILE,
    payload: userProfile
  };
};
export const getCurrentUserProfile = profile => {
  return {
    type: GET_PROFILE,
    payload: profile
  };
};

export const addNewExp = (newExp) => {
  return{
    type: ADD_NEW_EXPERIENCE,
    payload: newExp
  }
}

export const clearCurrentUserProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
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
      dispatch(errors(err.response.data));
    });
};

export const newUserProfile = (userData, history) => dispatch => {
  dispatch(isLoading());
  axios
    .post("/api/profile/", userData)
    .then(res => {
        dispatch(createProfile(res.data));
        history.push('/dashboard');
    })
    .catch(err => dispatch(errors(err.response.data)));
};


export const newExp = (expData) => dispatch => {
  axios.post("/api/profile/experience", expData).then((res)=>{
    dispatch(addNewExp(res.data));
  }).catch((err)=>{
    dispatch(errors(err.response.data))
  })
}