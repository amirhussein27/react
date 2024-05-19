import React, { Component } from 'react'

export default class Cartbox extends Component {
constructor(props){
  super(props);
  this.state={
    info:null
  }
}
async getIp(){
let response=await fetch('https://api.ipify.org?format=json')
return (await response.json()).ip;
}

async getInfo(){
let ip=await this.getIp();
let response2=await fetch(`http://ipwho.is/${ip}`)
// console.log(await response2.json());
return await response2.json()
}
 componentDidMount(){
  // console.log(this.getInfo());
  // this.getInfo().then(data=>{
  //   console.log(data);
  // })
  this.getInfo().then(data=>{
    this.setState({
    info:data
    })
    console.log(this.state.info);

  })
}

   render() {
    return (
      <>

<div className="card">
    {/* <h1>{this.state.info.ip}</h1> */}
  <img id='img' src="https://cdn.ipwhois.io/flags/ir.svg" alt="Denim Jeans"/>
  <h1>Tailored Jeanss</h1>
  <p className="price">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>Add to Cart</button></p>
</div>
      </>
    )
  }
}
