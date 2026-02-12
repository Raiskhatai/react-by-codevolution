import React, { useState } from "react";
import useCounter from "./useCounter";

const CounterONE = () => {
  const [increase, decrease, reset, count] = useCounter(10,10);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default CounterONE;
