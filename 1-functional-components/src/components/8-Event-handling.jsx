// const Event_click = () => {
//   let fun = () => {
//     console.log("click");
//   };
//   return (
//     <div>
//       <button onClick={fun}>click</button>

//       {/* fun() dosent work */}
//       {/* <button onClick={fun()}>click</button> */}
//     </div>
//   );
// };

// export default Event_click;

import React, { Component } from "react";

export class Event_click extends Component {
  fun() {
    console.log("clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.fun}>click</button>
        {/* <button onClick={() => this.fun()}>click</button> */}

        {/* this donsent work  */}
        {/* <button onClick={this.fun()}>click</button> */}
        {/* agar hum yeh funtion ke andar setState value change kar rhi hoti to infinite loop lag jata. */}
      </div>
    );
  }
}

export default Event_click;
