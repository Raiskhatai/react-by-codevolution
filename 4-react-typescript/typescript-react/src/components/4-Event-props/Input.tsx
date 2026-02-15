import type React from "react";

type InuptProps = {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Input = ({ value, changeHandler }: InuptProps) => {
  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} placeholder="not use states" />
    </div>
  );
};

export default Input;
