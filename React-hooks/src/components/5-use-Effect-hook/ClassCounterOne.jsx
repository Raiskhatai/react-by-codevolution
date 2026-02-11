import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  //   webpage pe jane par dikhega magar jo count ki initial value (first time value ) hogi wahi dikhegi isse
  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }

  //   isse value jab bhi upgrade hogi wah upgraded value(count) dikhegi intial value nhi .
  componentDidUpdate() {
    console.log(`total times component did mounte render`);
    document.title = this.state.count;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          property="Enter value"
          value={this.state.name}
          onChange={(e) => {
            this.setState({
              name: e.target.value,
            });
          }}
        />

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
