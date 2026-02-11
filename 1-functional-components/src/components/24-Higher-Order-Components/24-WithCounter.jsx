import React from "react"

const withCounter = (WrappedComponent,increamentNumber)=>{
    class WithCounter extends React.Component{
         constructor(props) {
    super(props)
  
    this.state = {
       count:0,
    }
  }

  increamentCount=()=>{
    this.setState(prevstate=>{
      return {count:prevstate.count+increamentNumber}
    })
  }
        render(){
            return <WrappedComponent count={this.state.count} increamentCount={this.increamentCount} {...this.props} />
        }
    }
    return WithCounter
}

export default withCounter