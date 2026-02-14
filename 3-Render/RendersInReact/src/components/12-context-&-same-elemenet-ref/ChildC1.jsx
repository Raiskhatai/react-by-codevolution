import React, { useContext } from "react";
import { CountContext } from "./ContextParent";

const ChildC1 = () => {
  let value = useContext(CountContext);
  console.log("render c");
  return <div>c {value}</div>;
};

export default ChildC1;
