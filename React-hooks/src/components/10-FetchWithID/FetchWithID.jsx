import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchWithID = () => {
  const [id, setid] = useState(0);
  const [val, setval] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((result) => {
        setval(result.data);
      });
    console.log(val);

    return () => {
      "stopped";
    };
  }, [id]);

  return (
    <div>
      <input
        type="number"
        placeholder="Enter id "
        value={id}
        onChange={(e) => setid(e.target.value)}
      />
      <h2>{val.title}</h2>
    </div>
  );
};

export default FetchWithID;
