import type React from "react";

type styles = {
  styles: React.CSSProperties;
};

const Styles = (props: styles) => {
  return (
    <div>
      <h1 style={props.styles}>hi</h1>
    </div>
  );
};

export default Styles;
