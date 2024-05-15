import React from 'react'
export default function Toggle(props) {
    let Toggle=props.boxes.map(box=>{
        return(
            <div class="toggle">
            <span>{box.title}  </span>
            <br />
            <label for="">
                <label class="switch">
                    <input type="checkbox" checked={props.activeboxes.includes(box.id)} />
                    <span class="slider round" onClick={(e)=> props.onhandler(box.id)}></span>
                  </label>
                <span class="control"></span>
            </label>
        </div>
        )
        
    })
  return (
    <div>
         <aside>
{Toggle}     
   </aside>
    </div>
  )
}
