import React, { Component, PureComponent } from "react";

class Purecomp extends PureComponent {
  render() {
    console.log(
      "****************** pure compoent render *********************",
    );
    return (
      <div>
        <h1> pure component</h1>
        {this.props.message}
      </div>
    );
  }
}

export default Purecomp;

// PureComponent React ka ek special type ka component hota hai jo performance optimize karne ke kaam aata hai
// Simple words me: yeh unnecessary re-rendering (page loading) ko rokta hai.

// yani agar state mey hum kuch change kar rhey hey magar wah pahle value jesa he hey to wah ek baar he chalega agar pure component .
// setState({
// message:"vishal"
// })
// isme this.state{message:"vishal"} feer vishal set kar rhey to pure Component ek baar he chalega impure feerse set karega ise .
