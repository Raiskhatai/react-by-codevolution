import React, { useState } from "react";

const useInput = (initial) => {
  const [value, setvalue] = useState(initial);
  const reset = () => {
    setvalue(initial);
  };
  const bind = {
    value,
    onChange: (e) => {
      setvalue(e.target.value);
    },
  };
  return [value, reset, bind];
};

export default useInput;
