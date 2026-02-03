import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IsLoggin: true,
    };
  }

  render() {
    /* 1 */
    // if (this.state.IsLoggin) {
    //   return <div>hello shahrukh</div>;
    // } else {
    //   return <div>wellcome user</div>;
    // }

    // let message = null;
    // if (this.state.IsLoggin) {
    //   message = <div>hello shahrukh</div>;
    // } else {
    //   message = <div>wellcome user</div>;
    // }

    /* 2 */

    // return this.state.IsLoggin == true ? (
    //   <div>hello shahrukh</div>
    // ) : (
    //   <div>wellcome user</div>
    // );

    /* 3 */
    return this.state.IsLoggin && <div>hello shahrukh</div>;
  }
}

export default UserGreeting;
