import React, { useState } from "react";
import ChildONE from "./ChildONE";
{
  /* optimization part one */
}

const ParentONE = ({ children }) => {
  const [count, setcount] = useState(0);
  console.log("render parent");
  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        increase - {count}
      </button>
      {children}
      {/* optimization part one */}
      {/* now only render ones while we comes first time in out web */}
      {/* kyuki children as a props baar baar change nhi hote wah render bhi baar - baar nhi hote */}

      {/* this way always render whenever we render parent so we paas children component as a children props */}
      {/* <ChildONE /> */}
    </div>
  );
};

export default ParentONE;
