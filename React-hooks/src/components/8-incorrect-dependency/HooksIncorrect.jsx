import React, { useEffect, useState } from "react";

const HooksIncorrect = () => {
  const [count, setcount] = useState(0);
  let interval = null;
  useEffect(() => {
    console.log("counter works");
    interval = setInterval(() => {
      // not do this mistake its not work
      // setcount(count + 1);

      // this will work .
      // setcount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("not working");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>this counter work-{count}</h1>
    </div>
  );
};

export default HooksIncorrect;
