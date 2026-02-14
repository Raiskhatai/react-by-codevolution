import React, { useState } from "react";
import { MemoChildFour } from "./ChildFour";

{
  /* donst use change able value with React.memo */
}

const ParentFour = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("salman");

  console.log("render parent");

  return (
    <div>
      <button onClick={() => setcount(count + 1)}>count - {count}</button>
      <button onClick={() => setname("shahrukh")}>name - {name}</button>

      <MemoChildFour name={name} />
    </div>
  );
};

export default ParentFour;
