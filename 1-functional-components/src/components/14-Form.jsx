import React, { Component } from "react";

export class From extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handle = (e) => {
    e.preventDefault();
    alert(
      `hello my name is ${this.state.username} and my topic is ${this.state.comment} and i am a ${this.state.topic} developer`,
    );
    this.setState({
      username: "",
      comment: "",
      topic: "",
    });
  };

  render() {
    let { username, comment, topic } = this.state;
    return (
      <form action="" onSubmit={this.handle}>
        <div>
          <input
            type="text"
            value={username}
            onChange={this.handleUserNameChange}
            placeholder="Enter value"
            className="form"
          />
          <textarea
            type="text"
            value={comment}
            onChange={this.handleCommentChange}
            placeholder="Enter value"
            className="form"
          />
          <select name="" id="" value={topic} onChange={this.handleTopicChange}>
            <option value="react">react</option>
            <option value="angular">angular</option>
            <option value="vue">vue</option>
          </select>
        </div>
        <button>submit</button>
      </form>
    );
  }
}

export default From;
