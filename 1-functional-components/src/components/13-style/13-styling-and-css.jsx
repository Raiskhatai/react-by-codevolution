import React from "react";
import "./13-myStyle.css";
// 1. Css stylesheets
// 2. inline styling
// 3. Css modules

const StyleCss = ({ primary }) => {
  let classname = primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${classname} font-xl`}>stylesheet</h1>
    </div>
  );
};

export default StyleCss;
