import axios from "axios";
import React, { useEffect, useReducer } from "react";

const FetchXuseReducersPart2 = () => {
  let initial = {
    post: {},
    error: "",
    loading: true,
  };

  let reduce = (state, action) => {
    switch (action.type) {
      case "success":
        return {
          post: action.payload,
          loading: false,
          error: "",
        };
      case "unsucessFull":
        return {
          post: {},
          loading: false,
          error: "Please check your network.",
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reduce, initial);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "success", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "unsucessFull" });
      });

    return () => {
      console.log("end");
    };
  }, []);

  return (
    <div>
      {state.loading ? "loading....." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default FetchXuseReducersPart2;
