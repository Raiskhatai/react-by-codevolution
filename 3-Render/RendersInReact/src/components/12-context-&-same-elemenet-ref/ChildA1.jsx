import React from "react";
import B1 from "./ChildB1";

const ChildA1 = () => {
  console.log("a is render");
  return (
    <div>
      A
      <B1 />
    </div>
  );
};

export const ChildMemoA1 = React.memo(ChildA1);
