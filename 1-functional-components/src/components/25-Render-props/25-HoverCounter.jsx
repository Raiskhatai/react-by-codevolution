import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
  render() {
    const {count,increamentCount}=this.props
    return (
      <div>
        <h2 onMouseOver={increamentCount}>hovered {count} times </h2>
      </div>
    )
  }
}

export default HoverCounterTwo
