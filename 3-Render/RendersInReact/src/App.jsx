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

const App = () => {
  return (
    <div>
      <ParentTWO />
    </div>
  );
};

export default App;
