import React from "react";

const Candidate = ({ person }) => {
  return (
    <div>
      hello my skills is {person.skills} and my name is {person.name}
    </div>
  );
};

export default Candidate;
