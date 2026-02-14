import React from "react";
import B1 from "./B1";

const A1 = () => {
  console.log("a is render");
  return (
    <div>
      A
      <B1 />
    </div>
  );
};

export const MemoA1 = React.memo(A1);
