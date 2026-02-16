import { useContext } from "react";
import { Context } from "./UserContext";

const Parent11 = () => {
  const UserContext = useContext(Context);
  const handlLogin = () => {
    if (UserContext) {
      UserContext.setuser({ name: "shahurkh", email: "@someone" });
    }
  };
  const handlLogout = () => {
    if (UserContext) {
      UserContext.setuser(null);
    }
  };
  return (
    <div>
      <button onClick={handlLogin}>login</button>
      <button onClick={handlLogout}>logout</button>
      <div className="">user name is {UserContext?.user?.name}</div>
      <div className="">user email is{UserContext?.user?.email} </div>
    </div>
  );
};

export default Parent11;
