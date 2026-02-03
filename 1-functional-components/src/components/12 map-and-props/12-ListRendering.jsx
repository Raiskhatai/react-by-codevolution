import React from "react";
import Person from "./Props";
import Candidate from "./Props";

const NameList = () => {
  // 1.
  //   let persons = ["bruce", "clark", "diana"];
  //   2.
  //   let persons = ["bruce", "diana", "clack"];
  //   let list = persons.map((person, idx) => <h1 key={idx}> hi {person}</h1>);

  let persons = [
    { id: 1, name: "batman", age: 30, skills: "react" },
    { id: 2, name: "superman", age: 32, skills: "angular" },
    { id: 3, name: "wonderwoman", age: 28, skills: "vue" },
  ];

  let list = persons.map((person, idx) => (
    <h1 key={idx}>
      <Candidate person={person} />
    </h1>
  ));

  return (
    // 1.
    // <div>
    //   {persons.map((person, idx) => {
    //     return <h1 key={idx}>wellcome {person}</h1>;
    //   })}
    // </div>

    // 2.
    // <div>{list}</div>
    <div>{list}</div>
  );
};

export default NameList;
