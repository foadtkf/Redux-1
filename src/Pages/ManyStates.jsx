import React, { useReducer } from "react";

const ManyStates = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "I") {
      return state + action.payload;
    } else if (action.type === "D") {
      return state - action.payload;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>{state}</h3>
      <div style={{ display: "flex", justifyContent: "center", columnGap: 20 }}>
        <button onClick={() => dispatch({ type: "I", payload: 5 })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "D", payload: 5 })}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default ManyStates;
