import type React from "react";
import { Login } from "./Login";
import type { PrivateProp } from "./Profile";

type PrivateComponent = {
  isLoggedIn: Boolean;
  component: React.ComponentType<PrivateProp>;
};

export const Private = ({
  isLoggedIn,
  component: Component,
}: PrivateComponent) => {
  if (isLoggedIn) {
    return <Component name={"shahrukh"} />;
  } else {
    return <Login />;
  }
};
