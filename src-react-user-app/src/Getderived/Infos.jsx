import React, { Component } from 'react'

export default class Infos extends Component {
  constructor(props){
super(props);
let usert=props.userid
console.log(usert);

this.state={
  user:null
}
  }

async getUserData(userid){
  let response=await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
  console.log(await response.json());
  // return await response.json()
}

  componentDidMount(){
    this.getUserData()
  }
  render() {
  console.log(this.props);
    return (
      <div>
             <div className="content">
       <p className="mp">id</p> 
       <p className="mp">id</p> 
       <p className="mp">id</p> 
       <p className="mp">id</p> 
    </div>
      </div>
    )
  }
}
