import React, { useState } from "react";
import useInput from "./Hooks/useInput";

const InputCustomHook = () => {
  let [firstName, resetFirstName, BindFirstName] = useInput("");
  let [secondName, resetSecondName, BindSecondName] = useInput("");

  let submitHandler = (e) => {
    e.preventDefault();
    alert(`firstName-${firstName} secondName-${secondName}`);
    resetFirstName();
    resetSecondName();
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input type="text" placeholder="Enter value" {...BindFirstName} />

        <input type="text" placeholder="Enter value" {...BindSecondName} />

        <button onClick={submitHandler}>submit</button>
      </form>
    </div>
  );
};

export default InputCustomHook;
