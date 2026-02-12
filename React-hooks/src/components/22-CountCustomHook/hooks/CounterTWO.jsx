import React from "react";
import useCounter from "./useCounter";

const CounterTWO = () => {
  const [increase, decrease, reset, count] = useCounter(0,5);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterTWO;
