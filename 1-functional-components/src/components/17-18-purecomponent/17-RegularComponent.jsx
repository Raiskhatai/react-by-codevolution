import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log(
      "****************** regular compoent render *********************",
    );
    return (
      <div>
        <h1>regular component</h1>
        {this.props.message}
      </div>
    );
  }
}

export default RegComp;


