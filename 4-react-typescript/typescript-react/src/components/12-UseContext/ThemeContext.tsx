import React from "react";
import { theme } from "./Theme";

export const UserContext = React.createContext(theme);

type ChildrenProp = {
  children: React.ReactNode;
};
const ThemeContext = ({ children }: ChildrenProp) => {
  return (
    <div>
      <UserContext.Provider value={theme}>{children}</UserContext.Provider>
    </div>
  );
};

export default ThemeContext;
