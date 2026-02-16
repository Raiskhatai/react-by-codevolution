import React, { createContext, useState } from "react";

type Author = {
  name: string;
  email: string;
};

type UserProp = {
  user: Author | null;
  setuser: React.Dispatch<React.SetStateAction<Author | null>>;
};

type childrenProp = {
  children: React.ReactNode;
};

export const Context = createContext<UserProp | null>(null);

const UserContext = ({ children }: childrenProp) => {
  const [user, setuser] = useState<Author | null>(null);
  return (
    <div>
      <Context.Provider value={{ user, setuser }}>{children}</Context.Provider>
    </div>
  );
};

export default UserContext;
