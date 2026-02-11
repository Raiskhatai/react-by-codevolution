import React, { useEffect, useState } from "react";

const CleanerHook = () => {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);

  let logMouseMover = (e) => {
    setx(e.clientX);
    sety(e.clientY);
  };

  useEffect(() => {
    console.log("triggerd");
    window.addEventListener("mousemove", logMouseMover);
    return () => {
      window.removeEventListener("mousemove", logMouseMover);
    };
  }, []);

  return (
    <div>
      <h1>Y-{y}</h1>
      <h1>X-{x}</h1>
    </div>
  );
};

export default CleanerHook;
