// import Greet from "./components/1-Greet/Greet";
// import Parent1 from "./components/2-Basic-props/Parent1";
// import Parent2 from "./components/3-advance-props/Parent2";
// import Parent3 from "./components/4-Event-props/Parent3";
// import Parent4 from "./components/5-Styles-Props/Parent-4";
// import Parent5 from "./components/6-pro-tips/Parent5";
// import Parent6 from "./components/7-UseState-props/Usestate";
// import Parent7 from "./components/8-UseState-Future-Value/Parent-7";
// import Parent8 from "./components/9-UseState-Type-Assertion/Parent-8";
// import ReducerCounter from "./components/10-UseReducer/ReducerCounter";
// import Parent9 from "./components/11-useReducer-strict-action-type/Parent9";
// import Parent10 from "./components/12-UseContext/Parent10";
// import { UserContext } from "./components/12-UseContext/ThemeContext";
// import ThemeContext from "./components/12-UseContext/ThemeContext";
// import Parent11 from "./components/13-UserContext-future-value/Parent11";
// import UserContext from "./components/13-UserContext-future-value/UserContext";
// import Parent12 from "./components/14-useRef/Parent12";
// import Parent13 from "./components/15-class-component/Parent13";
// import Parent14 from "./components/16-componentProps/parent14";
// import Parent15 from "./components/17-generics/Parent15";
// import Parent16 from "./components/18-Restricting-Prop/Parent16";
// import Parent17 from "./components/19-template-literals/Parent17";
// import Parent18 from "./components/20-wrapping-html-element/Parent18";
// import Parent19 from "./components/21-Extracting/Parent19";

import Text from "./components/22-Polymorphic/Text";

const App = () => {
  return (
    <div>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondry">
        label
      </Text>
    </div>
  );
};

export default App;
