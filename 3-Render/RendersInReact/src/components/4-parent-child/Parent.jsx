import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setcount] = useState(0);
  console.log("render parent");
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
        5
      </button>
      <Child />
    </div>
  );
};

export default Parent;
