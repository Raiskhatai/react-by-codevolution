import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setx(e.clientX);
      sety(e.clientY);
    });
  }, []);

  return (
    <div>
      <h1>y- {y}</h1>
      <h1>x- {x}</h1>
    </div>
  );
};

export default HookMouse;
