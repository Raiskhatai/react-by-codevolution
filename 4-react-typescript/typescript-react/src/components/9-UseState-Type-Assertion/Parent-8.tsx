import { useState } from "react";

// Type-Assertion : TypeScript normally khud type guess karta hai (type inference),
// lekin kabhi-kabhi hume usko manually batana padta hai — wahi hota hai type assertion .

type Object = {
  first: string;
  last: string;
};

const Parent8 = () => {
  const [user, setuser] = useState<Object>({} as Object);
  const isLogedIn = () => {
    let Obj: Object = {
      first: "shahurkh",
      last: "khan",
    };
    setuser(Obj);
  };

  return (
    <div>
      <button onClick={isLogedIn}>login</button>
      <h2>{user.first}</h2>
    </div>
  );
};

export default Parent8;
