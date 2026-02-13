import React, { useState } from "react";

const initailValue = ["clark", "kent"];

const StateImmutAbilityArray = () => {
  const [person, setperson] = useState(initailValue);
  let changeName = () => {
    console.log(person);
    // X not work
    // dosent render.
    // person.push("bruce");
    // person.push("wayne");
    // setperson(person);

    let copyPerson = [...person];
    copyPerson.push("bruce");
    copyPerson.push("wayne");
    setperson(copyPerson);
  };
  console.log("array render");
  return (
    <div>
      <h1>
        {person.map((item) => {
          return item + " ";
        })}
      </h1>
      <button onClick={changeName}>click</button>
    </div>
  );
};

export default StateImmutAbilityArray;
