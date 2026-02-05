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
import StyleCss from "./components/13-style/13-styling-and-css";
import InlineCss from "./components/13-style/13-inline";
import NameList from "./components/12 map-and-props/12-ListRendering";
import "./components/13-style/appStyle.css";
import Styles from "./components/13-style/appStyle.module.css";
import From from "./components/14-Form";
import FragmentDemo from "./components/16-FragmentDemo";
import ParentComp from "./components/17-18-purecomponent/17-ParentComponent";
import RefsDemo from "./components/19-RefsDemo";

class App extends Component {
  render() {
    return (
      <div className="">
        <RefsDemo />
      </div>
    );
  }
}

export default App;
