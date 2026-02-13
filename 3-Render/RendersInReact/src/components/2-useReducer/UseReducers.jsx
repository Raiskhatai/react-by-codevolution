import React, { useReducer } from "react";

let initial = 0;
let reduce = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;
    case "reset":
      return initial;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
};
const UseReducers = () => {
  console.log("render");
  const [count, dispatch] = useReducer(reduce, initial);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increase")}>increase</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <button onClick={() => dispatch("decrease")}>decrease</button>
    </div>
  );
};

export default UseReducers;
