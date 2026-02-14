import React from "react";

const ChildFive = ({ name,/* parent */ clickHandler }) => {
  console.log("render chilren");
  return (
    <div>
      <h3> children - {name} </h3>
      
      {/* <h3>
        clickHandler - {clickHandler.fname} {clickHandler.lname}{" "}
      </h3> */}
    </div>
  );
};

export let MemoChildFive = React.memo(ChildFive);
