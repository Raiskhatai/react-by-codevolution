import React from "react";

let Styles = {
  background: "red",
  fontSize: "200px",
};

const InlineCss = () => {
  return (
    <div>
      <div style={Styles}>inline</div>
    </div>
  );
};

export default InlineCss;
