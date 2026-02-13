import React, { useState } from "react";
import ParentONE from "./ParentONE";
import ChildONE from "./ChildONE";

const GrandParentONE = () => {
  const [newCount, setnewCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setnewCount(newCount + 1);
        }}
      >
        grandParent - {newCount}
      </button>
      <ParentONE newCount={newCount}>
        <ChildONE />
      </ParentONE>
    </div>
  );
};

export default GrandParentONE;
