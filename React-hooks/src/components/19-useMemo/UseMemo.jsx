import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);

  const increamentOne = () => {
    setcounterOne(counterOne + 1);
  };

  const increamentTwo = () => {
    setcounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return counterOne % 2 == 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={increamentOne}>count One -{counterOne}</button>
      <div>{isEven ? "true" : "false"}</div>
      <button onClick={increamentTwo}>count Two -{counterTwo}</button>
    </div>
  );
};

export default UseMemo;
