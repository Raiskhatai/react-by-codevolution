import React from "react";
import C1 from "./ChildC1";

const ChildB1 = () => {
  console.log("render b");
  return (
    <div>
      B
      <C1 />
    </div>
  );
};

export default ChildB1;
