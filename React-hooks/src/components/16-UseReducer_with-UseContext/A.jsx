import React, { useContext } from "react";
import { CountContext } from "./UseReducerXUseContext";

const A = () => {
  const props = useContext(CountContext);
  return (
    <div>
      <h1>{props.countValue.firstCount}</h1>
      <button
        onClick={() => props.stateDispatch({ type: "increase", value: 1 })}
      >
        +increase
      </button>
      <button
        onClick={() => props.stateDispatch({ type: "decrease", value: 1 })}
      >
        -decrease
      </button>
      <button onClick={() => props.stateDispatch({ type: "reset" })}>
        reset
      </button>
    </div>
  );
};

export default A;
