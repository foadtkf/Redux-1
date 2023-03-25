import { useReducer } from "react";
import { actionTypes } from "./actiontypes";

export const initialState = {
  data: [],
  loading: false,
  error: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STARTED:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FETCH_COMPLETED:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };
    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
