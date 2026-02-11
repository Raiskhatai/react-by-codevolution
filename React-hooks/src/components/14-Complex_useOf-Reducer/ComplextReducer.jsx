import React, { useReducer } from "react";

const ComplextReducer = () => {
  let initialize = {
    firstCounter: 0,
    secondCounter: 0,
  };
  let reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
      case "increase":
        return { ...state, firstCounter: state.firstCounter + 1 };
      case "decrease":
        return { ...state, firstCounter: state.firstCounter - 1 };

      case "increase+5":
        return { ...state, firstCounter: state.firstCounter + 5 };
      case "decrease-5":
        return { ...state, firstCounter: state.firstCounter - 5 };

        // secondCounter
      case "increase+second":
        return { ...state, secondCounter: state.secondCounter + 1 };
      case "decrease-second":
        return { ...state, secondCounter: state.secondCounter - 1 };

      case "reset":
        return initialize;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialize);

  return (
    <div>
      <h1>{state.firstCounter}</h1>
      <h1>{state.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "increase", value: 1 })}>
        +increase
      </button>
      <button onClick={() => dispatch({ type: "decrease", value: 1 })}>
        -decrease
      </button>
      <button onClick={() => dispatch({ type: "increase+5", value: 5 })}>
        increase+5
      </button>
      <button onClick={() => dispatch({ type: "decrease-5", value: 5 })}>
        decrease-5
      </button>
      <br />
      <button onClick={() => dispatch({ type: "increase+second", value: 1 })}>
        +increase second
      </button>
      <button onClick={() => dispatch({ type: "decrease-second", value: 1 })}>
        -decrease second
      </button>
      <br />
      <button onClick={() => dispatch({ type: "reset", value: 0 })}>
        reset
      </button>
    </div>
  );
};

export default ComplextReducer;
