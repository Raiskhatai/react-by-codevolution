import React, { Component } from 'react'

class ClickCounterTwo extends Component {
  render() {
    let {count,increamentCount}=this.props
    return ( <button onClick={increamentCount}>clicked {count} times</button>)
}
}

export default ClickCounterTwo
