import { useState } from "react";

// const [user, setuser] = useState<null | Object>(null); // user ki value null ya type Object ho sakti hey .

type Object = {
  first: string;
  last: string;
};

const Parent7 = () => {
  const [user, setuser] = useState<null | Object>(null);
  const isLogedIn = () => {
    let Obj: Object = {
      first: "shahurkh",
      last: "khan",
    };
    setuser(Obj);
  };
  const isLogedOut = () => {
    setuser(null);
  };
  return (
    <div>
      <button onClick={isLogedIn}>login</button>
      <button onClick={isLogedOut}>logOut</button>
      <h2>{user == null ? "login please" : user.first}</h2>
    </div>
  );
};

export default Parent7;
