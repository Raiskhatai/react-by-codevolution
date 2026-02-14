import React from "react";
import C1 from "./C1";

const B1 = () => {
  console.log("render b");
  return (
    <div>
      B
      <C1 />
    </div>
  );
};

export default B1;
