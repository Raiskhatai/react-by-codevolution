import React from "react";

const ChildTWO = () => {
  console.log("child render");
  return <div>child two component</div>;
};

export let MemorizedChildTWO = React.memo(ChildTWO);

// jab humata parent component render hota hey to bina kisi kaam child component bhi render hota hey us child component mey koi value change nhi ho rhi ho tab bhi is wajah se hum  React.memo ka use karte child compoent par taki jab uski value change ho tab he wah render ho
