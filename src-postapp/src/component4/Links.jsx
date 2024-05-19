import React from 'react'
export default function Links(props) {
  // console.log(props);
  return (
    <div>
  <a href="#about" className='link' onClick={(e)=>props.handleClick(props.index)}>{props.index}{props.title}</a><hr/>
    </div>
  )
}
