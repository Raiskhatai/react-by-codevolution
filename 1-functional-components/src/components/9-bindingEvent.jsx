import React, { Component } from "react";

export class Binding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "wellcome to this site",
    };
  }

  // clickHandler() {
  //   // this.setState({
  //   //   message: "thank you for subscribing us ",
  //   // });
  //   console.log(this);

  //   /* yeh this reffer kar rha clickHandler tak yaha ise State nhi mila to undefined de rha */
  // }

  // there four way to use method in a event handler
  // 1. way
  // clickHandler = () => {
  //   // this.setState({
  //   //   message: "thank",
  //   // });
  // };

  // 2. 3.
  // clickHandler() {
  //   this.setState({
  //     message: "thank you for subscribing",
  //   });
  // }

  // 4. way
  clickHandler = this.clickHandler.bind(this);

  clickHandler() {
    this.setState({
      message: "4. way ",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler}>click</button> */}

        {/* 2. way  */}
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}

        {/* 3. way and best*/}
        {/* <button
          onClick={() => {
            this.clickHandler();
          }}
        >
          click
        </button> */}

        {/* 4. way */}
        <button onClick={this.clickHandler}>click</button>

        {/* {console.log(this)} */}
        {/*  this "this" key word is reffer to Binding class its give object */}
      </div>
    );
  }
}

export default Binding;
