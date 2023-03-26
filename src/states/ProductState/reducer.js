import { useReducer } from "react";
import { actionTypes } from "./actiontypes";

export const initialState = {
  data: [],
  cart: [],
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
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case actionTypes.REMOVE_FROM_CART:
      // console.log(state, action.payload);
      return {
        ...state,
        cart: [
          ...state.cart.filter((product) => product.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};
