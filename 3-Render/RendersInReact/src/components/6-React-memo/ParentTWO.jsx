import React, { useState } from "react";
import UseStates from "../1-useState/UseStates";
import { MemorizedChildTWO } from "../6-React-memo/ChildTWO";
/* optimization part 2 */
// jab humata parent component render hota hey to bina kisi kaam child component bhi render hota hey us child component mey koi value change nhi ho rhi ho tab bhi is wajah se hum  React.memo ka use karte child compoent par taki jab uski value change ho tab he wah render ho 

const ParentTWO = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("shahrukh");
  console.log("parent render");
  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        change count - {count}
      </button>
      <button
        onClick={() => {
          setname("salman");
        }}
      >
        change name - {name}
      </button>
      <MemorizedChildTWO name={name} />
    </div>
  );
};

export default ParentTWO;
