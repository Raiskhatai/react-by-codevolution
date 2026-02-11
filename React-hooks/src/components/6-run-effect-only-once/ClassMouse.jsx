import React, { Component } from "react";

export class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMouseMove = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMouseMove);
    console.log(this.state.x, this.state.y);
  }

  render() {
    return (
      <div>
        <h1>x- {this.state.x} </h1>
        <h1>y- {this.state.y} </h1>
      </div>
    );
  }
}

export default ClassMouse;
