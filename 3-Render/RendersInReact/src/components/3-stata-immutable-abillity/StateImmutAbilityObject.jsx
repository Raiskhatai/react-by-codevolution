import React, { useState } from "react";

const initailValue = { fname: "bruce", lname: "wayne" };

const StateImmutAbilityObject = () => {
  const [person, setperson] = useState(initailValue);
  const changeName = () => {
    // X not work
    // dosent render.
    // person.fname = "clark";
    // person.lname = "kent";
    // setperson(person);

    /* right way  */
    // rendering work
    const copyperson = { ...person };
    copyperson.fname = "clark";
    copyperson.lname = "kent";
    setperson(copyperson);
  };
  console.log("object render");
  return (
    <div>
      <h1>
        {person.fname} - {person.lname}
      </h1>
      <button onClick={changeName}>click</button>
    </div>
  );
};

export default StateImmutAbilityObject;
