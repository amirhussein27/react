import React from 'react'

export default function Graytext(props) {
  return (
    <div>
       <img id='grayimg' src={props.avatar} alt="" />   <div className="msg-btn-holder">

        <div className="receiver-msg msg-btn">
              <p>{props.sendtex}</p>
            </div>
            <br/><br/><br/><br/>
            
    </div>
    </div>
  )
}
