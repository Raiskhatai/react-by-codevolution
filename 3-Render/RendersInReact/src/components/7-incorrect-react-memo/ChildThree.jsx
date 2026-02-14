import React from "react";

const ChildThree = ({ name, children }) => {
  console.log("render children");
  return (
    <div>
      {children} children name-{name}{" "}
    </div>
  );
};

export const MemoChildThree = React.memo(ChildThree);
