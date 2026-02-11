import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchXuseReducer = () => {
  const [post, setpost] = useState({});
  const [error, seterrorr] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((respose) => {
        setloading(false);
        setpost(respose.data[0]);
        seterrorr("");
      })
      .catch((error) => {
        setloading(false);
        seterrorr("please check your network");
        setpost({});
      });
    return () => {
      console.log("end");
    };
  }, []);

  return (
    <div>
      {loading ? "loading...." : post.email}
      {error ? error : null}
    </div>
  );
};

export default FetchXuseReducer;
