import React, { useState } from "react";
import { ChildMemoA1 } from "./ChildA1";

{
  /* whenever parent component render its all child components also renders
  the solution is make react.memo in A1 the parent of other child.
  now only those child render those value be change. */
}

export const CountContext = React.createContext();

const ContextParent = ({ children }) => {
  console.log("parent render");
  const [count, setcount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        click
      </button>
      <CountContext.Provider value={count}>{children}</CountContext.Provider>
    </div>
  );
};

export default ContextParent;
