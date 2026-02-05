import React, { Component } from "react";
import RegComp from "./17-RegularComponent";
import Purecomp from "./17-PureComponents";
import MemoCom from "./18-Memo";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "vishal",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        message: "vishal",
      });
    }, 2000);
  }

  render() {
    console.log(
      "******************* parent component render ************************",
    );
    return (
      <div>
        {/* <RegComp message={this.state.message} />
        <Purecomp message={this.state.message} /> */}
        <MemoCom message={this.state.message}/>
      </div>
    );
  }
}

export default ParentComp;
