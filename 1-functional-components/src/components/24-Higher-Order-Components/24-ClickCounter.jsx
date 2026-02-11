import React, { Component } from 'react'
import withCounter from './24-WithCounter'

export class ClickCounter extends Component {  
  render() {
    const {count,increamentCount}=this.props
    return (
      <div>
        <button onClick={increamentCount}>clicked {count} times</button>
      </div>
    )
  }

}

export default withCounter(ClickCounter,5)
