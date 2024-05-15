import React, { Component } from 'react'
import Greeting from './Greeting'
import Login from './Login'
import Logout from './Logout'
import Message from './Message'

export default class Conditional extends Component {
  state={
    islogedin:false
  }

  handleclick=()=>{
    console.log(this.state.islogedin);
    // this.state.islogedin=true or use this way

    this.setState({
      islogedin:true
    })
  //  console.log(this.state.islogedin);

   this.setState(state=>{
return state
   })
  }

  handleclicklogout=()=>{
    console.log(this.state.islogedin);
    // this.state.islogedin=false or use this way
    this.setState(
      {islogedin:false}
    )
  //  console.log(this.state.islogedin);

   this.setState(state=>{
return state
   })
  }
  render() {
   
let button=null;
if(this.state.islogedin){
  button=<Logout handleclicklogout={this.handleclicklogout}/>
}
else{
  button=<Login handleclick={this.handleclick} />
}
return (
      <div>
        <Greeting islogedin={this.state.islogedin} />
       
    {button}

    {this.state.islogedin && <p>user is loed in</p>}
      <Message islogedin={this.state.islogedin}/>
      </div>
    )
  }
}
