import React, { Component } from "react";
import "./App.css";
// import { Greet } from "./components/Greet";
// import Mygreet from "./components/Greet";
import Wellcome from "./components/2-Wellcome";

class App extends Component {
  render() {
    return (
      <div className="">
        {/* <Greet /> */}
        {/* <Mygreet /> */}
        <Wellcome />
      </div>
    );
  }
}

export default App;
