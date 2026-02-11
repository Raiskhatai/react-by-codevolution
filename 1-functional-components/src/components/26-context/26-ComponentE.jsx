import React, { Component } from 'react'
import ComponentF from './26-ComponentF'
import UserContext from './26-UserContext'

export class ComponentE extends Component {
  render() {
    return (
      <div>
        component e context {this.context}
        <ComponentF/>
      </div>
    )
  }
}

ComponentE.contextType=UserContext

export default ComponentE
