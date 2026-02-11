import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../12-UseContext/A";

const D = () => {
  let user = useContext(UserContext);
  let channel = useContext(ChannelContext);
  return (
    <div>
      <h1>user - {user}</h1>
      <h1>channel - {channel}</h1>
    </div>
  );
};

export default D;
