import React, { Component } from 'react'
import { UserConsumer } from './26-UserContext'

export class ComponentF extends Component {
  render() {
    return (
     <UserConsumer>
        {username=>{
            return <div>hello {username}</div>
        }}
     </UserConsumer>
    )
  }
}

export default ComponentF
