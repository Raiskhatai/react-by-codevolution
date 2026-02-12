import React, { useEffect, useRef } from "react";

const FocusInputRef = () => {
  const userRef = useRef(null);

  useEffect(() => {
    userRef.current.focus();
  },[]);

  return (
    <div>
      <input type="text" placeholder="Enter value" ref={userRef} />
    </div>
  );
};

export default FocusInputRef;
