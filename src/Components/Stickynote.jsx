import React from 'react'
export default function Stickynote(props){


    return <div id="board">
    <div className="note draggable">
			  <div className="text">{props.content}
          <textarea className="cnt" placeholder="Enter note description here">{props.title}</textarea>
      </div>
			</div>
  </div>
}