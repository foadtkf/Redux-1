import React, { useReducer } from "react";

const ManyStates = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div></div>;
};

export default ManyStates;
