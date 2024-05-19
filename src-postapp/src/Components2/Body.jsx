import React from 'react'
import Textmessage from './Textmessage';
export default function Body(props) {
  // console.log(props.sendtex);
    // console.log(props.gravatar.user1);
    // console.log(props.sendtex.chatlist[0].message);
    // console.log(props.chatlist);
    let chats=props.chatlist.map(chat=>{
      let isLeft='receive'=== chat.type;

      return(

       <Textmessage 
       sendtex={chat.message}
time={chat.time}
  //  avatar={props.sendtex.gravatar.user1} 
   avatar={isLeft? props.sendtex.gravatar.user2:props.sendtex.gravatar.user1} 
  chatlist={props}
      
      isLeft={isLeft} />
    )})
  return (
    <div>
        <div>
 {chats}
    </div>
    </div>
  )
}
