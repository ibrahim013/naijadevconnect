import { combineReducers } from "redux";
import { authReducer } from "../reducer/authReducer";
import { errorReducer } from "../reducer/errorReducer";
import { profileReducer } from '../reducer/profileReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});
