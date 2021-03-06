import {
  IS_LOADING,
  GET_PROFILE,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  CREATE_PROFILE,
  ADD_NEW_EXPERIENCE,
  ADD_NEW_EDUCATION,
  DELETE_EXPERIENCE,
  GET_ALL_PROFILES
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
export const getAllProfiles = (profiles) =>{
  return{
    type: GET_ALL_PROFILES,
    payload: profiles
  }
}

export const addNewExp = newExp => {
  return {
    type: ADD_NEW_EXPERIENCE,
    payload: newExp
  };
};
export const addNewEdu = newEdu => {
  return {
    type: ADD_NEW_EDUCATION,
    payload: newEdu
  };
};

export const clearCurrentUserProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

export const delExp = profile => {
  return {
    type: DELETE_EXPERIENCE,
    payload: profile
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
      history.push("/dashboard");
    })
    .catch(err => dispatch(errors(err.response.data)));
};

export const newExperience = (expData, history) => dispatch => {
  axios
    .post("/api/profile/experience", expData)
    .then(res => {
      dispatch(addNewExp(res.data));
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch(errors(err.response.data));
    });
};

export const newEducation = (eduData, history) => dispatch => {
  axios
    .post("/api/profile/education", eduData)
    .then(res => {
      dispatch(addNewEdu(res.data));
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch(errors(err.response.data));
    });
};

//get all profile
export const getProfiles = () => dispatch => {
  dispatch(isLoading())
  axios.get('/api/profile/profiles/all').then(res => {
    dispatch(getAllProfiles(res.data))
  }).catch(err => dispatch(getAllProfiles({})))
}
//get single profile

export const getSingleProfile = (handle) => (dispatch) => {
  dispatch(isLoading())
  axios.get(`/api/profile/${handle}`).then((res)=>{
    dispatch(getCurrentUserProfile(res.data))
  }).catch((err)=> dispatch(getCurrentUserProfile({})))
}
//delete experience
export const deleteExperience = id => dispatch => {
  dispatch(isLoading());
  axios
    .delete(`/api/profile/experience/${id}`)
    .then(res => {
      dispatch(delExp(res.data));
    })
    .catch(err => {
      dispatch(errors(err.response.data));
    });
};

//delete education
export const deleteEducation = id => dispatch => {
  dispatch(isLoading());
  axios
    .delete(`/api/profile/education/${id}`)
    .then(res => {
      dispatch(delExp(res.data));
    })
    .catch(err => {
      dispatch(errors(err.response.data));
    });
};
