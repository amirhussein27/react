import React from 'react'

export default function Textmessage(props) {
    // console.log(props.avatar);
  return (
    <div>
        <div className="msg-btn-holder">
        <h1>{props.messagee}</h1>

   <img className={`${props.avatar==='https://apexonline.ir/wp-content/uploads/2022/10/default-profile-female.png'? 'grayimg':'blueimg'}`} src={props.avatar} alt="" />

        {/* <div className={`${!props.isLeft && 'sender-msg msg-btn'}`}> */}
        <div className={`${!props.isLeft? 'sender-msg msg-btn':"receiver-msg msg-btn"}`}>

            
            
        {/* sender-msg msg-btn  */}
              {/* <p>{props.sendtex}</p> */}
              <p>{props.sendtex}</p>

            </div>
       
            
            <p>{props.time}</p>
    </div>

  

    </div>
  )
}


