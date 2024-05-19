import React, { Component } from 'react'

export default class Inputmessage extends Component {
  constructor(props){
    super(props);
    this.state={
      input:''
    }
    this.handlechange=this.handlechange.bind(this)
    this.handler=this.handler.bind(this)
  
  }
  handlechange(event){
    console.log(event.target.value);
    this.setState({
      input: event.target.value
    })
   
  }
  handler(){
   this.props.handler(this.state.input)
   this.setState({
    input:''
   })
  }
  render() {
    return (
      <div>
          <div className="footer">
          <div id='seconddiv' >
            <input placeholder="Message" className="text-box" name="message" value={this.state.input} onChange={this.handlechange}/>
            <div className="send-ico" id="sendico" onClick={this.handler}>
              <i id='thirddiv' className="fas fa-paper-plane"></i>
            </div>
      
          </div>
      
        </div>
      </div>
    )
  }
}
