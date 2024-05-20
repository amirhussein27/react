import React, { Component } from 'react'
import Leftside from './Leftside'
import Content from './Content'

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:null,
            currentPost:0
        }
        this.changeCurrentPost=this.changeCurrentPost.bind(this)
    }

    async getPosts(){
    let response=await fetch('https://jsonplaceholder.typicode.com/posts');
return await response.json()
    }
    componentDidMount(){
this.getPosts().then(posts=>{
    this.setState({
posts:posts,
currentPost:0
    })
})

    }

    changeCurrentPost(index){
        this.setState({
            currentPost:index
        })
    }
  render() {
    return (
      <div>
 <Leftside posts={this.state.posts} changeCurrentPost={this.changeCurrentPost}/>
<Content />
      </div>
    )
  }
}
