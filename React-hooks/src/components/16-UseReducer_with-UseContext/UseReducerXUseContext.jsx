import React, { useReducer } from "react";
import C from "./C";
import A from "./A.jsx";
import F from "./F.jsx";

export let CountContext = React.createContext();
let initialize = {
  firstCount: 0,
};
let reduce = (state, action) => {
  switch (action.type) {
    case "increase":
      return { firstCount: state.firstCount + action.value };
    case "decrease":
      return { firstCount: state.firstCount - action.value };
    case "reset":
      return initialize;
    default:
      return state.firstCount;
  }
};

const UseReducerXUseContext = () => {
  const [count, dispatch] = useReducer(reduce, initialize);
  return (
    <div>
      <CountContext.Provider
        value={{ countValue: count, stateDispatch: dispatch }}
      >
        <A />
        <h1>componentA</h1>
        <C />
        <h1>componentB</h1>
        <F />
        <h1>componentC</h1>
      </CountContext.Provider>
    </div>
  );
};

export default UseReducerXUseContext;
