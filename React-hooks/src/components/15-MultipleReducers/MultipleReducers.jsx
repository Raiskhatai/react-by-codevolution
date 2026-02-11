import React, { useReducer } from "react";

const MultipleReducers = () => {
  let initial = {
    firstCount: 0,
  };
  let reduce = (state, action) => {
    console.log(state);
    switch (action.type) {
      case "increase":
        return { firstCount: state.firstCount + action.value };
      case "decrease":
        return { firstCount: state.firstCount - action.value };
      case "reset":
        return initial;
      default:
        state;
    }
  };

  const [state, dispatch] = useReducer(reduce, initial);
  const [stateTwo, dispatchTwo] = useReducer(reduce, initial);
  console.log(state.firstCount);
  return (
    <div>
      <h1>{state.firstCount}</h1>
      <button onClick={() => dispatch({ type: "increase", value: 1 })}>
        +increase
      </button>
      <button onClick={() => dispatch({ type: "decrease", value: 1 })}>
        +increase
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>

      <h1>{stateTwo.firstCount}</h1>
      <button onClick={() => dispatchTwo({ type: "increase", value: 1 })}>
        +increase
      </button>
      <button onClick={() => dispatchTwo({ type: "decrease", value: 1 })}>
        +increase
      </button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
    </div>
  );
};

export default MultipleReducers;
