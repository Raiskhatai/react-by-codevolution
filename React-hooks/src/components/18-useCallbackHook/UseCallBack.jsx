import React, { useCallback, useState } from "react";
import CallbackTitle from "./CallbackTitle";
import CallbackCount from "./CallbackCount";
import CallbackButton from "./CallbackButton";

const UseCallBack = () => {
  const [age, setage] = useState(25);
  const [salary, setsalary] = useState(50000);

  let increamentAge = useCallback(() => {
    setage(age + 1);
  }, [age]);

  const IncreamnetSalary = useCallback(() => {
    setsalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <CallbackTitle />
      <CallbackCount text={"age"} count={age} />
      <CallbackButton handleClick={increamentAge}>
        Increament age
      </CallbackButton>
      <CallbackCount text={"salary"} count={salary} />
      <CallbackButton handleClick={IncreamnetSalary}>
        Increament salary
      </CallbackButton>
    </div>
  );
};

export default UseCallBack;
