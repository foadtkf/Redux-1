import React, { useReducer } from "react";
import { initialState, reducer } from "../states/reducer";

const ExploreMore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const submit = (event) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div className="...">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="input-sm border-blue-200"
            name="firstName"
            id="firstName"
            onBlur={(e) =>
              dispatch({
                type: "I",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className="...">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="input-sm border-blue-200"
            name="lastName"
            id="lastName"
            onBlur={(e) =>
              dispatch({
                type: "I",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className="border-black">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="input-sm border-blue-900"
            name="email"
            id="email"
            onBlur={(e) =>
              dispatch({
                type: "I",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className="flex justify-center gap-4">
          <h1>Gender</h1>
          <div>
            <input
              className="cursor-pointer"
              type="radio"
              id="male"
              name="gender"
              value="male"
              onBlur={(e) =>
                dispatch({
                  type: "I",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              className="cursor-pointer"
              type="radio"
              id="female"
              name="gender"
              value="female"
              onBlur={(e) =>
                dispatch({
                  type: "I",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              className="cursor-pointer"
              type="radio"
              id="other"
              name="gender"
              value="other"
              onBlur={(e) =>
                dispatch({
                  type: "I",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            class=" checked:bg-blue-500 cursor-pointer"
            name="term"
            id="term"
            onClick={() => dispatch({ type: "T" })}
          />
          <label htmlFor="term" className="cursor-pointer">
            I agree to the terms and conditions
          </label>
        </div>
        <button
          type="submit"
          className="btn border-4 border-indigo-500/100 rounded-full px-2  text-black"
          disabled={!state.term}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExploreMore;
