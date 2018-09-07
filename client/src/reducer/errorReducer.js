import { GET_ERROR } from "../types/types";

const initialState = {}

export const errorReducer =(state =initialState, action)=>{
switch(action.type){
  case GET_ERROR:
  return action.payload
  default:
  return state;
}

}
