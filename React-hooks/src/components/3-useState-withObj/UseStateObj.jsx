import React, { useState } from "react";

const UseStateObj = () => {
  const [name, setname] = useState({ firstname: "", lastname: "" });
  console.log(name);
  return (
    <div>
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setname({ ...name, firstname: e.target.value })}
      />
      <input
        type="text"
        value={name.lastname}
        onChange={(e) => setname({ ...name, lastname: e.target.value })}
      />

      <h2>your first name is {name.firstname}</h2>
      <h2>your last name is {name.lastname}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
};

export default UseStateObj;
