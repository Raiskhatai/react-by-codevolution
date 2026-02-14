import React from "react";

const ChildSix = ({ name, /* person */ clickHandler }) => {
  clickHandler();
  console.log("render chilren");
  return (
    <div>
      <h3> children - {name} </h3>

      {/* <h1>
        person {person.fname} {person.lname}
      </h1> */}
    </div>
  );
};

export let MemoChildSix = React.memo(ChildSix);
