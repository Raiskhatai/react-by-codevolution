import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.event("child ");
        }}
      >
        click
      </button>
    </div>
  );
};

export default ChildComponent;
