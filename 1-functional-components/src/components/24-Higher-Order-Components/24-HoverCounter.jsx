import React, { Component } from 'react'
import withCounter from './24-WithCounter'

export class HoverCounter extends Component {
  render() {
    const {count,increamentCount} = this.props
    return (
      <div>
       <h2 onMouseOver={increamentCount}> hovered {count} times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter,10)
