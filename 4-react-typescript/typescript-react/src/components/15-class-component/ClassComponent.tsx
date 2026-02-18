import { Component } from "react";

type MessageProp = {
  message: string;
};

type CountType = {
  count: number;
};

export class ClassComponent extends Component<MessageProp, CountType> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default ClassComponent;
