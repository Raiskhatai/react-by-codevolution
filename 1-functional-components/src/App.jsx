import React, { Component } from "react";
import "./App.css";
// import { Greet } from "./components/Greet";
// import Mygreet from "./components/Greet";
import Wellcome from "./components/2-Wellcome";
import Hello from "./components/3-with-&-without-jsx";
import Hi from "./components/props/props_first";
import Propy from "./components/props/4-Props";
import Message from "./components/5-State";
import Counter from "./components/6-Counter";
import Destructring_props from "./components/7-destucturing-props";
import Event_click from "./components/8-Event-handling";
import Event_Binding from "./components/9-bindingEvent";
import ParentComponent from "./components/10-methods-as-props/Parent-component";
import UserGreeting from "./components/11-ConditionalRendering";
import NameList from "./components/12 map-and-props/12-ListRendering";

class App extends Component {
  render() {
    return (
      <div className="">
        <NameList />
      </div>
    );
  }
}

export default App;
