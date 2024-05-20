import React, { Component } from 'react'
import Leftside from './leftside'
import Content from './Content'

export default class Post extends Component {
  constructor(props){
    super(props)
    this.state={
      posts:null,
      currentPost:null
    }
    this.changeCurrentPost=this.changeCurrentPost.bind(this);
  }
async getPosts(){
  let posts=await fetch('https://jsonplaceholder.typicode.com/posts')
  return await posts.json();

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
   console.log(this.state.posts);
    return (
      <div>
          <div>
          <div>
   <Leftside posts={this.state.posts} changeCurrentPost={this.changeCurrentPost}/>
{null != this.state.currentPost && <Content Post={this.state.posts[this.state.currentPost]}/>}
      </div>
    </div>
      </div>
    )
  }
}
