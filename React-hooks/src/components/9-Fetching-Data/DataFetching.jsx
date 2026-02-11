import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const DataFetching = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        let { data } = result;
        console.log(data);
        setposts(data);
      })
      .catch((error) => console.log("this is error oye " + error));

    return () => {
        console.log()
    };
  }, []);

  return (
    <div>
      {posts.map((item, i) => {
        return (
          <h3 key={i}>
            {" "}
            index-{i+1} title- {item.title}
          </h3>
        );
      })}
    </div>
  );
};

export default DataFetching;
