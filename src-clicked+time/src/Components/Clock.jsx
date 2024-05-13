import React, { Component } from 'react'
export default class Clock extends Component{
constructor(props){
super(props);
this.state={
  date: new Date()
}
setInterval(this.thick.bind(this),1000)
}
render(){
  return <div>
      <p>hello user</p>
      <p>it is {this.state.date.toLocaleTimeString()}</p>
    </div>
}
 
thick(){
  this.setState({
    date:new Date()
  })
}
  
}