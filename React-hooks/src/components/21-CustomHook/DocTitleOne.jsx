import React, { useState } from "react";
import useDocTitle from "./Hooks/useDocTitle";

const DocTitleOne = () => {
  const [title, settitle] = useState(0);
  useDocTitle(title);
  return (
    <div>
      <button onClick={() => settitle(title + 1)}>change title count</button>
    </div>
  );
};

export default DocTitleOne;
