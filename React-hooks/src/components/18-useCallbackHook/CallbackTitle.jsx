import React from "react";

const CallbackTitle = () => {
  console.log("this is title running");
  return (
    <div>
      <h1>title</h1>
    </div>
  );
};

export default React.memo(CallbackTitle);
