import React, { useState } from "react";
import useDocTitle from "./Hooks/useDocTitle";

const DocTitleTwo = () => {
  const [count, setcount] = useState(0);
  useDocTitle(count);
  return (
    <div>
      <button onClick={() => setcount((count) => count + 1)}>
        click to change title
      </button>
    </div>
  );
};

export default DocTitleTwo;
