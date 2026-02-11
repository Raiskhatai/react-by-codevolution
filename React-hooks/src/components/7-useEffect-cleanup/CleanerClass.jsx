import React, { Component } from "react";

class CleanerClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePostion = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePostion);
  }

  // componentWillUnmount tab trigger hota hai jab React kisi component ko screen (DOM) se hata deta hai.
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePostion);
    console.log("triggerd");
  }

  render() {
    return (
      <div>
        <h1>x-{this.state.x}</h1>
        <h1>y-{this.state.y}</h1>
      </div>
    );
  }
}

export default CleanerClass;
