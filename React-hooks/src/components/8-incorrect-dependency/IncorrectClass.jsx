import React, { Component } from "react";

export class IncorrectHooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("render works");
    this.interval = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    console.log("render not work");
    clearInterval(this.interval);
  }
  timer = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default IncorrectHooks;
