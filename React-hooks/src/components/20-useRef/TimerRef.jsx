import React, { useEffect, useRef, useState } from "react";

const TimerRef = () => {
  const [timer, settimer] = useState(0);
  let timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      settimer((timer) => timer + 1);
    }, 1000);
    console.log("still running");
  }, []);

  return (
    <div>
      <h1>timer - {timer}</h1>
      <button onClick={() => clearInterval(timerRef.current)}>stop</button>
    </div>
  );
};

export default TimerRef;
