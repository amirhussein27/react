import React, { Component } from 'react'

export default class Click extends Component {
 constructor(props){
super();
this.state={
    clickcount:0
}
 }

    render() {
    return (
      <div>
        <p>click count is {this.state.clickcount}</p>
      <button onClick={()=>this.handleclick()}>click me</button>
      </div>
    )
  }
  handleclick(event){
    console.log(event);
    this.setState((state)=>{
return {
    clickcount:state.clickcount + 1

}
    })
  }
}
