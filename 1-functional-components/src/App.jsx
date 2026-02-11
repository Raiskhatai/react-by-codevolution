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
import FocusInput from "./components/20-ref/20-FocusInput";
import FRParentInput from "./components/21-Forwarding-refs/21-FRParentInput";
import PortalDemo from "./components/22-portals";
import ErrorBoundary from "./components/23-error-boundary/23-ErrorBoundary";
import Hero from "./components/23-error-boundary/23-Hero";
import ClickCounter from "./components/24-Higher-Order-Components/24-ClickCounter";
import HoverCounter from "./components/24-Higher-Order-Components/24-HoverCounter";
import ClickCounterTwo from "./components/25-Render-props/25-ClickCounter";
import HoverCounterTwo from "./components/25-Render-props/25-HoverCounter";
import User from "./components/25-Render-props/25-User";
import CounterTwo from "./components/25-Render-props/25-Counter";
import ComponentC from "./components/26-context/26-ComponentC";
import { UserProvider } from "./components/26-context/26-UserContext";
import PostList from "./components/27-HTTP-GET-request/27-PostList";
import axios from "axios";
import PostForm from "./components/28-PostForm";

class App extends Component {
  render() {
    return (
      <div className="">

<PostForm/>

      {/* 26 */}
      {/* <UserProvider value="shahrukh">
      <ComponentC/>
      </UserProvider> */}

{/* 25 */}

        {/* <CounterTwo render={(count,increamentCount)=>(
          <ClickCounterTwo count={count} increamentCount={increamentCount}/>
        )}/>
         <CounterTwo render={(count,increamentCount)=>(
          <HoverCounterTwo count={count} increamentCount={increamentCount}/>
        )}/> */}
       {/* <ClickCounterTwo/>
       <HoverCounterTwo/>
       <User render={(isLoggedIn)=> isLoggedIn?"shahrukh":"guest"}/> */}
      </div>
    );
  }
}

export default App;
