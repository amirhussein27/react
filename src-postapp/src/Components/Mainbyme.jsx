import React, { Component } from 'react'
import Sidebars from './Sidebars'
import Boxes from './Boxess'
export default class Mainbyme extends Component {
state={
     boxes:[
        {id:1,title:"box1"},
        {id:2,title:"box2"},
        {id:3,title:"box3"},
        {id:4,title:"box4"},
        {id:5,title:"box5"},
        {id:6,title:"box6"},


    ],
    activeboxes:[1,2,3,4,5,6]
}

   onhandler=(id)=>{
    console.log(id);
    let activeboxes=[...this.state.activeboxes]
    if(activeboxes.includes(id)){
        console.log(27);
       activeboxes.splice( activeboxes.indexOf(id),1)
        console.log(activeboxes);
    }
    else{
        console.log(28);
      activeboxes.push(id)
        console.log(activeboxes);

    }
    this.setState(state=>{
        return{
            ...state,activeboxes
        }
    })
   }

  render() {



    return (
        <div>
  <Sidebars
  onhandler={this.onhandler}
  boxes={this.state.boxes} activeboxes={this.state.activeboxes} />
    <div class="rightside">

  <Boxes   boxes={this.state.boxes} activeboxes={this.state.activeboxes} />
  </div>

    </div>
    )
  }
}
