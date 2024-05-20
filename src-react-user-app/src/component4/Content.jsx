import React, { Component } from 'react'
import Eachpost from './Eachpost'
import Comments from './Comments'
export default class Content extends Component {
  constructor(props){
    super(props)
    this.state={
      comments:null
    }
  }
  async getComments(){
    let response=await fetch(`https://jsonplaceholder.typicode.com/comments`)
  return (await response).json();
  }
  componentDidMount(){
    console.log(this.props.Post.id);
    if(this.props.Post){
      this.getComments().then(comments=>this.setState({
        comments:comments
      }))
    }

  }

  componentDidUpdate(){
  
  }
  render() {
    console.log(this.state.comments)

    return (
      <div>
            <div>
      <div className="main">
<Eachpost data={this.props.Post}/>
{null != this.state.comments && <Comments mine={this.props.Post.id} data={this.state.comments}/>}
</div>
    </div>
      </div>
    )
  }
}
