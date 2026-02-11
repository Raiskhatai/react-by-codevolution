import React, { useReducer } from "react";

const ReducerHook = () => {
  let initialize = 0;
  let reducer = (state, action) => {
    switch (action) {
      case "increase":
        return state + 1;
      case "decrease":
        return state - 1;
      case "reset":
        return initialize;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialize);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch("increase")}>+increase</button>
      <button onClick={() => dispatch("decrease")}>-decrease</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default ReducerHook;
