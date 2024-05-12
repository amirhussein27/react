import React from 'react'

export default function StickyNote(){
    return (<div id="board">
    <div class="note draggable">
        <div class="text">
          <textarea className="cnt" placeholder="Enter note description here"></textarea>
      </div>
      </div>
   </div>)
}