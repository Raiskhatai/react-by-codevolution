import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increament() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }
  increament_by_5() {
    this.increament();
    this.increament();
    this.increament();
    this.increament();
    this.increament();
  }
  render() {
    console.log("callback value is " + this.state.count);
    return (
      <div>
        <h1>counter : {this.state.count}</h1>
        <button onClick={() => this.increament_by_5()}>increase</button>
      </div>
    );
  }
}

export default Counter;

