import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchButton = () => {
  const [id, setid] = useState(1);
  const [access, setaccess] = useState({});
  const [idFromButtonClick, setidFromButtonClick] = useState(1);

  function clickHandler() {
    setidFromButtonClick(id);
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        setaccess(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log("unmount");
    };
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="number" value={id} onChange={(e) => setid(e.target.value)} />
      <h3>{access.title}</h3>
      <button onClick={clickHandler}>access</button>
    </div>
  );
};

export default FetchButton;
