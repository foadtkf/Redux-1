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
        <button
          className="px-2 border-red-500 rounded-full border-x-4 border-y-2 border-y-yellow-500 hover:border-none hover:bg-blue-500 hover:text-white hover:font-bold"
          onClick={() => dispatch({ type: "I", payload: 5 })}
        >
          increment
        </button>
        <button
          className="px-2 border-red-500 rounded-full border-x-4 border-y-2 border-y-yellow-500 hover:border-none hover:bg-blue-500 hover:text-white hover:font-bold"
          onClick={() => dispatch({ type: "D", payload: 5 })}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default ManyStates;
