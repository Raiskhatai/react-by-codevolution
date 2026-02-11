import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false,
      }
    }

    static getDerivedStateFromError(error){
        return {
            hasError:true,
        }
    }
    
    componentDidCatch(error,info){
      console.log(error)
      console.log(info)
    }

  render() {
    if(this.state.hasError){
        return <h1>something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary


// what is error boundary

// a class component that implements either one or both of the lifecycle methods gerDerivedStateFromError or componentDidCatch becomes an error boundary.

// the static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information.