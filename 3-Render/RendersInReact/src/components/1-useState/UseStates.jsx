import React, { useState } from "react";

const UseStates = () => {
  const [count, setcount] = useState(0);
  console.log("render");
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        increase
      </button>

      <button
        onClick={() => {
          setcount(0);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setcount(5);
        }}
      >
        increase-5
      </button>
    </div>
  );
};

export default UseStates;
