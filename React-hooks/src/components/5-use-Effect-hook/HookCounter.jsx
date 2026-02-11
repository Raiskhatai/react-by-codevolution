import React, { useEffect, useState } from "react";

const HookCounter = () => {
  const [counter, setcounter] = useState(0);
  const [name, setname] = useState("");

  /* sirf useEffect hook se componentDidMount() and ComponentDidUpgrade dono ka kaam ho gaya */

  //   agar chahte hey jab bhi kuch upgrade ho tab useEffect chale to yeh
//   useEffect(() => {
//     document.title = `you clicked ${counter} times`;
//     console.log("total times useEffect runs");
//   });

  //   agar chahte hey specific state upgrade ho tab useEffect chale to yeh
    useEffect(() => {
      document.title = `you clicked ${counter} times`;
      console.log("total times useEffect runs");
    }, [counter]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />

      <button
        onClick={() => {
          setcounter((prev) => prev + 1);
        }}
      >
        {counter}
      </button>
    </div>
  );
};

export default HookCounter;
