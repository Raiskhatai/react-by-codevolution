import React from "react";

const MemoCom = ({ message }) => {
  console.log({ message });
  return <div>{message}</div>;
};

export default React.memo(MemoCom);
