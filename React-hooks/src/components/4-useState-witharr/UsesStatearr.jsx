import React, { useState } from "react";

const UsesStatearr = () => {
  const [items, setitems] = useState([]);
  let addItems = () => {
    // both ways are right.

    // setitems([
    //   ...items,
    //   { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    // ]);
    
    setitems([...items, Math.floor(Math.random() * 10) + 1]);
    console.log(items);
  };
  return (
    <div>
      <button onClick={() => addItems()}>add number</button>
      <ul>
        {items.map((elem, idx) => {
          return <li key={idx}>{elem}</li>;
        })}
      </ul>
    </div>
  );
};

export default UsesStatearr;
