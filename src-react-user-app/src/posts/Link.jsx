import React from 'react'

export default function Link(props) {
    // console.log(props);
  return (
    <div>
       <a href="#about" onClick={(e)=>props.handleclick(props.index)}>{props.key}{props.title}</a>
    </div>
  )
}
