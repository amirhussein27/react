import React, { Component } from 'react'

export default class Main extends Component {
  state={
    boxes:[
     {id:1, title:'box 1'},
     {id:2, title:'box 2'},
     {id:3, title:'box 3'},
     {id:4, title:'box 4'},
     {id:5, title:'box 5'},
     {id:6, title:'box 6'},

    ],
    activeboxes:[1,2,3,4,5,6]
  }

  handletogglebtn(id){
console.log(id);
let activeboxes=[...this.state.activeboxes]
if(activeboxes.includes(id)){
  activeboxes.splice(activeboxes.indexOf(id),1)
}
else{
  activeboxes.push(id)
}
this.setState(state=>{
  return{
    ...state,activeboxes
  }
})

  }
  render() {
let togglee=this.state.boxes.map(box=>{
  return(
    <div className="toggle">
    <span>{box.title}  </span>
    <label for="">
        <label className="switch">
            <input type="checkbox" checked={this.state.activeboxes.includes(box.id)}></input>
            <span className="slider round" onClick={()=> this.handletogglebtn(box.id)}></span>
          </label>
        <span className="control"></span>
    </label>
</div>
  )
  
})

let boxes=this.state.boxes.map(
  box=>{
    if(this.state.activeboxes.includes(box.id)){
      return(
        <div className="box">{box.title}</div>
      )
    }

  }
)

    return (
      <React.Fragment>
          <aside>
     
      {togglee}
       
    </aside>
    <div className="rightside">
     
     
{boxes}
    </div>
      </React.Fragment>
   
    )
  }
}
