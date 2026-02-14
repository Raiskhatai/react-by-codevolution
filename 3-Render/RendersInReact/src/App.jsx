import React from "react";
import UseStates from "./components/1-useState/UseStates";
import UseReducers from "./components/2-useReducer/UseReducers";
import StateImmutAbilityObject from "./components/3-stata-immutable-abillity/StateImmutAbilityObject";
import StateImmutAbilityArray from "./components/3-stata-immutable-abillity/StateImmutAbilityArray";
import Parent from "./components/4-parent-child/Parent";
import Child from "./components/4-parent-child/Child";
import ParentONE from "./components/5-same-element-refrence/ParentONE";
import ChildONE from "./components/5-same-element-refrence/ChildONE";
import GrandParentONE from "./components/5-same-element-refrence/GrandParentONE";
import ParentTWO from "./components/6-React-memo/ParentTWO";
import ParentThree from "./components/7-incorrect-react-memo/ParentThree";
import ParentFour from "./components/8-incorrect-react-memo/ParentFour";
import ParentFive from "./components/9-incorrect-react-memo/ParentFive";
import ParentSix from "./components/10-incorrect-react-memo/ParentSix";
import ContextApi from "./components/11-context/ContextApi";
import ContextParent from "./components/12-context-&-same-elemenet-ref/ContextParent";
import { ChildMemoA1 } from "./components/12-context-&-same-elemenet-ref/ChildA1";

const App = () => {
  return (
    <div>
      <ContextParent>
        <ChildMemoA1 />
      </ContextParent>
    </div>
  );
};

export default App;
