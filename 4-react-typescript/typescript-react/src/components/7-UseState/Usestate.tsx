import { useState } from "react";

// usestate dosent need any declartion or type for this simple program

const Parent6 = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log(IsLoggedIn);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log(IsLoggedIn);
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Parent6;
