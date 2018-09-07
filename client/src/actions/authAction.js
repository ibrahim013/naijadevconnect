import axios from "axios";
import setAuthHeader from "../utilities/setAuthHeader";
import jwt_decode from "jwt-decode";
import { SET_USER_DATA, GET_ERROR } from "../types/types";

export const setRegisteredUser = userData => {
  return {
    type: SET_USER_DATA,
    payload: userData
  };
};
export const setUserError = errors => {
  return {
    type: GET_ERROR,
    payload: errors
  };
};

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err => dispatch(setUserError(err.response.data)));
};

//login

//thunk

export const setUser = userData => {
  return {
    type: SET_USER_DATA,
    payload: userData
  };
};

export const userLogin = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      console.log(res)
      const { token } = res.data;
      //set token to localstorage
      localStorage.setItem("jwtToken", token);
      //set autorization header
      setAuthHeader(res);
      //decode token
      const decodedToken = jwt_decode(token);
      //dispatch decoded token to redux store
      dispatch(setUser(decodedToken));
    })
    .catch(err => dispatch(setUserError(err.response.data)));
};

export const logoutUser = ()=> dispatch => {
  //remove token from local storage
  localStorage.removeItem('jwtToken');
  //remove from authorization header
  setAuthHeader(false);
  dispatch(setUser({}))
}