import { actionTypes } from "./actiontypes";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  term: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.I:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.T:
      return {
        ...state,
        term: !state.term,
      };
    default:
      return state;
  }
};
