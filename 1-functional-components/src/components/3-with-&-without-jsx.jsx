import React, { createElement } from "react";

/* with jsx */
// const Hello = () => {

//   return <div className="hi"><h1>with jsx</h1></div>;
// };

                            /* vs */
                            
/* without jsx */
// React.createElement 3 item leta he 1 - tag 2 - class ya name etc. (property) 3 - content

const Hello = () => {
  return React.createElement(
    "div",
    { className: "hi", id: "hi" },
    createElement("h1", null, "without jsx"),
  );
};

export default Hello;
