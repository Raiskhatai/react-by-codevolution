import { Component } from "react";

class Wellcome extends Component {
  render() {
    return (
      <div>
        <h1>
          wellcome {this.props.name} a.k.a {this.props.heroname};
        </h1>
      </div>
    );
  }
}

export default Wellcome;
