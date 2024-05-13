import React, { Component } from 'react'

export default class Clickme extends Component {
    constructor(props){
super(props)
this.state={
    clickCount:0
}
this.handleclick=this.handleclick.bind(this)
 
}
    render() {
    return (
      <div>
        <p>clicked is= {this.state.clickCount}</p>
        <button onClick={()=> this.handleclick()}>click</button>
        <div onClick={this.logme}>event
        </div>

      </div>
    )
  }
  logme(event){
    setTimeout(function(){
 console.log(event.altKey)
    },500)
   
  }
  handleclick(){
this.setState((state)=>{
    return {
        clickCount:state.clickCount +1
    }
}
)
} 
}


