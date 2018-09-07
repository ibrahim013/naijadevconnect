import { combineReducers } from "redux";
import { authReducer } from "../reducer/authReducer";
import { errorReducer } from "../reducer/errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
