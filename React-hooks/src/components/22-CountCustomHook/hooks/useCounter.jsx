import React, { useState } from "react";

const useCounter = (initial = 0, value) => {
  const [count, setcount] = useState(initial);

  const increase = () => {
    setcount((count) => count + value);
  };

  const decrease = () => {
    setcount((count) => count - value);
  };

  const reset = () => {
    setcount(initial);
  };
  return [increase, decrease, reset, count];
};

export default useCounter;
