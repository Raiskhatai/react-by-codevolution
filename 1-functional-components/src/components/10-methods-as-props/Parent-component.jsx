import React, { Component } from "react";
import ChildComponent from "./Child-component";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "parent and ",
    };
  }

  EventClicked = (ret) => {
    alert(this.state.message + " " + ret);
  };

  render() {
    return (
      <div>
        <ChildComponent event={this.EventClicked} />
      </div>
    );
  }
}

export default ParentComponent;
