import React from 'react'
import Box from './box'
export default function Boxes(props) {
  let boxes=props.boxes.map(box=>{

    if(props.activeboxes.includes(box.id)){
        return(
<Box title={box.title} />
          )
    }
})
  return (
    <div>
  {boxes}
    </div>
  )
}
