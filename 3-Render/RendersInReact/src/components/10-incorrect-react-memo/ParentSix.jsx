import React, { useCallback, useMemo, useState } from "react";
import { MemoChildSix } from "./ChildSix";

const ParentSix = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("salman");

  const person = {
    fname: "shahrukh",
    lname: "khan",
  };

  {
    /* solution is : */
  }
  const MemoUseMemo = useMemo(() => {
    return person;
  }, []);

  let clickHandler = () => {};

  const MemoClickHandler = useCallback(clickHandler, []);

  console.log("render parent");

  return (
    <div>
      <button onClick={() => setcount(count + 1)}>count - {count}</button>
      <button onClick={() => setname("shahrukh")}>name - {name}</button>

      <MemoChildSix
        name={name}
        person={MemoUseMemo}
        clickHandler={MemoClickHandler}
      />
    </div>
  );
};

export default ParentSix;
