import B from "./B";
import React from "react";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
const A = () => {
  return (
    <div>
      <UserContext.Provider value={"shahrukh"}>
        <ChannelContext.Provider value="Global">
          <B />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default A;
