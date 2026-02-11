import React, { useContext } from "react";
import { CountContext } from "./UseReducerXUseContext";

const F = () => {
  const props = useContext(CountContext);
  return (
    <div>
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

export default F;
