import React, { Component, useState } from "react";

const UseStateImplement = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <button onClick={() => setcount(count + 5)}>click {count}</button>
    </div>
  );
};

export default UseStateImplement;

// // this is class component method. ab itna use mey nhi aata lengthy codes and confusion on this key word.
// export class UseStateImplement extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   upgradeCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.upgradeCount()}>
//           click {this.state.count}
//         </button>
//       </div>
//     );
//   }
// }

// export default UseStateImplement;
