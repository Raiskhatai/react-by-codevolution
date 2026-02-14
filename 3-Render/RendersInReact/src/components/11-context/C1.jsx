import React, { useContext } from "react";
import { CountContext } from "./ContextApi";

const C1 = () => {
  let value = useContext(CountContext);
  console.log("render c");
  return (
    <div>
      c {value} 
    </div>
  );
};

export default C1;
