import React, { Component } from "react";

export class RefsDemo extends Component {
  constructor(props) {
    super(props);

    // 1st approch
    this.InputRef = React.createRef();
    // 2st approch
    this.cbRef=null;
    this.setCbRef=(element)=>{
      this.cbRef=element;
    }
  }

  componentDidMount() {
    // this.InputRef.current.focus();
    if(this.cbRef){
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    alert(this.InputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="this is inputref" ref={this.InputRef} />
        <input type="text" placeholder="this is cbref" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default RefsDemo;
