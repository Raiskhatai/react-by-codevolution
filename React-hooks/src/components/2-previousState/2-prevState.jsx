import React, { useState } from "react";

const PrevState = () => {
  const [num, setnum] = useState(0);
  let intialCount = 0;

  let increaseByFive = () => {
    // soluction

    for (let i = 0; i < 5; i++) {
      setnum((prev) => prev + 1);
    }

    // this code dosent work its only increase num by 1.

    // for (let i = 0; i < 5; i++) {
    //   setnum(num + 1);
    // }

    // setnum(num + 1);
    // setnum(num + 1);
    // setnum(num + 1);
    // setnum(num + 1);
    // setnum(num + 1);
  };

  return (
    <div>
      <h1>count: {num}</h1>
      <br />
      {/* num+1 is not right way if we use in function */}
      <button onClick={() => setnum(num + 1)}>+1</button>
      <button onClick={() => setnum(num - 1)}>-1</button>
      <button onClick={() => increaseByFive()}>+5</button>
      <button onClick={() => setnum(intialCount)}>reset</button>
    </div>
  );
};

export default PrevState;
