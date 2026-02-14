import React from "react";

const ChildFour = ({ name }) => {
  console.log("render chilren");
  let date = new Date();
  return (
    <div>
      <h3> children - {name} </h3>
      <h3>
        the date is - {date.getHours()} {date.getMinutes()} {date.getSeconds()}
      </h3>
    </div>
  );
};

export let MemoChildFour = React.memo(ChildFour);
