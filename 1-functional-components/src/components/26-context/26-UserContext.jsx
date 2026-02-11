import React from "react";
import ComponentE from "./26-ComponentE";

const UserContext=React.createContext();

const UserProvider=UserContext.Provider;
const UserConsumer=UserContext.Consumer;

export {UserProvider,UserConsumer};
export default UserContext;

