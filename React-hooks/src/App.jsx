import React from "react";
import PrevState from "./components/2-previousState/2-prevState";
import UseStateImplement from "./components/1-useStateImplementation/1-UseStateImplement";
import UseStateObj from "./components/3-useState-withObj/UseStateObj";
import UsesStatearr from "./components/4-useState-witharr/UsesStatearr";
import ClassCounterOne from "./components/5-use-Effect-hook/ClassCounterOne";
import HookCounter from "./components/5-use-Effect-hook/HookCounter";
import ClassMouse from "./components/6-run-effect-only-once/ClassMouse";
import HookMouse from "./components/6-run-effect-only-once/HookMouse";
import CleanerClass from "./components/7-useEffect-cleanup/CleanerClass";
import CleanerHook from "./components/7-useEffect-cleanup/CleanerHook";
import MouseContainer from "./components/7-useEffect-cleanup/MouseContainer";
import IncorrectHooks from "./components/8-incorrect-dependency/IncorrectClass";
import HooksIncorrect from "./components/8-incorrect-dependency/HooksIncorrect";
import DataFetching from "./components/9-Fetching-Data/DataFetching";
import FetchWithID from "./components/10-FetchWithID/FetchWithID";
import FetchButton from "./components/11-buttonAcess/FetchButton";
import A from "./components/12-UseContext/A";
import ReducerHook from "./components/13-ReducerHook/ReducerHook";
import ComplextReducer from "./components/14-Complex_useOf-Reducer/ComplextReducer";
import MultipleReducers from "./components/15-MultipleReducers/MultipleReducers";
import UseReducerXUseContext from "./components/16-UseReducer_with-UseContext/UseReducerXUseContext";
import FetchXuseReducer from "./components/17-FetchDataXuseReducer/FetchXuseReducer";
import FetchXuseReducersPart2 from "./components/17-FetchDataXuseReducer/FetchXuseReducersPart2";
import UseCallBack from "./components/18-useCallbackHook/UseCallBack";
import UseMemo from "./components/19-useMemo/UseMemo";
import FocusInputRef from "./components/20-useRef/FocusInputRef";
import TimerRef from "./components/20-useRef/TimerRef";
import DocTitleOne from "./components/21-CustomHook/DocTitleOne";
import DocTitleTwo from "./components/21-CustomHook/DocTitleTwo";
import CounterONE from "./components/22-CountCustomHook/hooks/CounterONE";
import CounterTWO from "./components/22-CountCustomHook/hooks/CounterTWO";

const App = () => {
  return (
    <div>
      <CounterONE />
      <CounterTWO />
    </div>
  );
};

export default App;
