import { useReducer } from "react";

const Parent9 = () => {
  let initial = {
    count: 0,
  };

  type stateType = {
    count: number;
  };

  type UpdateAction = {
    type: "increament" | "decreament";
    payload: number;
  };

  type resetAction = {
    type: "reset";
  };

  type actionType = UpdateAction | resetAction;

  let reduce = (state: stateType, action: actionType) => {
    switch (action.type) {
      case "increament":
        return { count: state.count + action.payload };
      case "decreament":
        return { count: state.count - action.payload };
      case "reset":
        return initial;
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
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Parent9;
