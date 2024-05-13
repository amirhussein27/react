import React, { Component } from 'react'

export default class Mainbyme extends Component {
state={
     boxes:[
        {id:1,title:"box1"},
        {id:2,title:"box2"},
        {id:3,title:"box3"},
        {id:4,title:"box4"},

    ],
    activeboxes:[1,2,3,4]
}

   onhandler(id){
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
    let toggle=this.state.boxes.map(box=>{
        return(
            <div class="toggle">
            <span>{box.title}  </span>
            <label for="">
                <label class="switch">
                    <input type="checkbox" checked={this.state.activeboxes.includes(box.id)} />
                    <span class="slider round" onClick={()=> this.onhandler(box.id)}></span>
                  </label>
                <span class="control"></span>
            </label>
        </div>
        )
        
    })
    let boxes=this.state.boxes.map(box=>{

        if(this.state.activeboxes.includes(box.id)){
            return(
                <div class="box">{box.title}</div>
                
            
                )
        }
  
        
    })

    return (
        <div>
       <aside>
     {toggle}

      
    </aside>
    <div class="rightside">

  {boxes}
  </div>

    </div>
    )
  }
}
