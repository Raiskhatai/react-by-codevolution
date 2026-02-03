import { Component } from "react";

class Hi extends Component {
  render() {
    return (
      <div>
        <h1>
          hi {this.props.name} a.k.a {this.props.heroname}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Hi;
