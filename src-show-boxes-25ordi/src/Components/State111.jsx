import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
super(props);
this.state={
    brand:"Ford",
    Color:"Red"
};
    }
    changeColor= () =>{
        this.setState({Color:"blue"})
    }
  render() {
    return (
      <div>
        <h1>kl {this.state.Color}</h1>
        <button onClick={this.changeColor}>change</button>
        <button onClick={this.changeColor}>change</button>

      </div>
    )
  }
}
