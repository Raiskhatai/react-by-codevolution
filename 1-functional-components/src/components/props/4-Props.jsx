import { Component } from "react";
import Hi from "./props_first";
import React from "react";
import Wellcome from "./Second_props";

class Propy extends Component {
  render() {
    return (
      <div>
        <Hi name="diana" heroname="wonder woman">
          <p>this children props</p>
        </Hi>
        <Hi name="clark " heroname="superman">
          <button>superman</button>
        </Hi>
        <Hi name="bruce " heroname="batman" />
        <Wellcome name="diana" heroname="wonderwoman" />
        <Wellcome name="clark" heroname="superman" />
        <Wellcome name="bruce" heroname="batman" />
      </div>
    );
  }
}

export default Propy;
