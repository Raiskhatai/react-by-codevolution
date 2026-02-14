import React, { useMemo, useState } from "react";
import { MemoChildFive } from "./ChildFive";

{
  /* jab hum parent mey change kar rhey hey or humare child ko React.memo se export kiya feer bhi feer bhi child render ho rha yeh is liye kyu ki hum child mey props bhej rhey jo parent mey to jub bhi parent mey render hoga new for ex. count change hona tab new object ya new function banta hey is liye child bhi render ho rha iska solution hey useMemo and useCallback hook check 10th. */
}

const ParentFive = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("salman");

  const Person = {
    fname: "shahrukh",
    lname: "khan",
  };

  let clickHandler = () => {};

  console.log("render parent");

  return (
    <div>
      <button onClick={() => setcount(count + 1)}>count - {count}</button>
      <button onClick={() => setname("shahrukh")}>name - {name}</button>

      <MemoChildFive
        name={name}
        /* person={Person} */ clickHandler={clickHandler}
      />
    </div>
  );
};

export default ParentFive;
