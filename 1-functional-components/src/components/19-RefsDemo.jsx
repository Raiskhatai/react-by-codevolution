import React, { Component } from "react";

export class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.InputRef = React.createRef();
  }

  componentDidMount() {
    this.InputRef.current;
    console.log(this.InputRef);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter values" ref={this.InputRef} />
      </div>
    );
  }
}

export default RefsDemo;
