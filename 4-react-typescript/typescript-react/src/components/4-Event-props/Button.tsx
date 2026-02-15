import type React from "react";

type ButtonProp = {
  id: number;
  ClickHandlder: (even: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ id, ClickHandlder }: ButtonProp) => {
  return (
    <div>
      <h1>{id}</h1>
      <button onClick={ClickHandlder}>click </button>
    </div>
  );
};

export default Button;
