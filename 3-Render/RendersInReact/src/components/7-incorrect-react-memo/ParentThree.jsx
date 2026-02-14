import React, { useState } from "react";
import { MemoChildThree } from "./ChildThree";
{
  /* agar hum React.memo ka use kar rhey or sath children tag mey tags ex. <h1>hello</h1> etc. ka bhi use kar rhey to ye wrong way hey children component bhi render hoga */
}

const ParentThree = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("shahrukh");

  console.log("render parent");
  return (
    <div>
      <button onClick={() => setcount(count + 1)}>
        increase num - {count}
      </button>
      <button onClick={() => setname("salman")}>change name - {name}</button>
      <MemoChildThree name={name}> <h1>helllo</h1> </MemoChildThree>
    </div>
  );
};

export default ParentThree;
