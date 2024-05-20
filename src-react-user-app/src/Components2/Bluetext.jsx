import React from 'react'

export default function Bluetext(props) {
  return (
    <div>
               <img id='blueimg' src={props.avatar} alt="" />  
       <div className="msg-btn-holder">
            <div className="sender-msg msg-btn">
              <p>{props.rectex}</p>
            </div>
          </div>
    </div>
  )
}
