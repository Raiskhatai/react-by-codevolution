// import React, { Component } from "react";

// export class Destructring_props extends Component {
//   render() {
//     let { name, heroname } = this.props;
//     return (
//       <div>
//         <h1>
//           hello {name} a.k.a {heroname}
//         </h1>
//       </div>
//     );
//   }
// }

// export default Destructring_props;

                        /* with function */

const Destructring_props = (/* { name, heroname } */ props) => {
  let { name, heroname } = props;
  return (
    <div>
      <h1>
        hi {name} a.k.a. {heroname}
      </h1>
    </div>
  );
};

export default Destructring_props;
