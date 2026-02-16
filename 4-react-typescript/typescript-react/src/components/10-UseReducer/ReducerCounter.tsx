import { useReducer } from "react";

const ReducerCounter = () => {
  let initial = {
    count: 0,
  };
  type stateCount = {
    count: number;
  };
  type actionCount = {
    type: string;
    payload: number;
  };
  let reduce = (state: stateCount, action: actionCount) => {
    switch (action.type) {
      case "increament":
        return { count: state.count + action.payload };
      case "decreament":
        return { count: state.count - action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reduce, initial);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increament", payload: 1 })}>
        increament
      </button>
      <button onClick={() => dispatch({ type: "decreament", payload: 1 })}>
        decreament
      </button>
    </div>
  );
};

export default ReducerCounter;
