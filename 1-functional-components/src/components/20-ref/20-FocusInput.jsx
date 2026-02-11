import React, { Component } from 'react'
import Input from './20-RefWithClass'

export class FocusInput extends Component {
    constructor(props) {
      super(props)
    
        this.componentRef=React.createRef();
    }

    clickHandler=()=>{
        this.componentRef.current.focusInput();
    }

  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus input</button>
      </div>
    )
  }
}

export default FocusInput
