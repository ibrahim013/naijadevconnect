import { IS_LOADING, GET_PROFILE, GET_ERRORS, CLEAR_CURRENT_PROFILE } from "../types/types";
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
      if (err.response.data.errors.noprofile === "No profile found") {
        return dispatch(getCurrentUserProfile({}));
      }
      dispatch(errors(err.response.data))
    });
};
