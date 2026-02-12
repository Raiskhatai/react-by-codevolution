import React from "react";

const CallbackCount = ({ text, count }) => {
  console.log(`rendering - ${text}`);
  return (
    <div>
      {text}-{count};
    </div>
  );
};

export default React.memo(CallbackCount);
