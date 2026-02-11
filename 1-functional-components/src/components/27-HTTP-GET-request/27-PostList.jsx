import axios from 'axios'
import React, { Component } from 'react'

export class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            console.log(response.data)
            this.setState({posts:response.data})
        }).catch(error=>{
            console.log(error);
            this.setState({errorMsg:"error retreiving data"});
        })
    }

  render() {
    const {posts}=this.state
    return (
      <div>
        list of post
        {
            posts.length?
            posts.map(post=> <div key={post.id}>{post.title}</div> ):
            null
        }
        {errorMsg? <div>{errorMsg}</div>:null }
      </div>
    )
  }
}

export default PostList
