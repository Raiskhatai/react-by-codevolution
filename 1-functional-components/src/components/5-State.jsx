import { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "wellcome visitor",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.setState({
              message: "thank you for subscribing",
            });
          }}
        >
          subscribe
        </button>
      </div>
    );
  }
}

export default Message;
