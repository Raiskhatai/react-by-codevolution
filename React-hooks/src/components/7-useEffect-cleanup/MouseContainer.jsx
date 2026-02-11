import React, { useState } from "react";
import CleanerHook from "./CleanerHook";
import CleanerClass from "./CleanerClass";

const MouseContainer = () => {
  const [toggle, settoggle] = useState(true);
  console.log(toggle);
  return (
    <div>
      <button onClick={() => settoggle(!toggle)}> {toggle} toggle</button>
      {toggle && <CleanerHook />}
    </div>
  );
};

export default MouseContainer;
