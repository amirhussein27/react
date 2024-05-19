import React, { Component } from 'react'
import Chat from './chat'
import Graytext from './Graytext'
import Bluetext from './Bluetext'
import Inputmessage from './Inputmessage'
import Body from './Body'

export default class Mainchat extends Component {
    constructor(props){
        super(props);
        this.state={

            title:"hi",
            namee:"mee",
            avatar:"https://apexonline.ir/wp-content/uploads/2022/10/default-profile-female.png",
            rectex:
            "hi i have receievd",
            sendtex:
            "sendedtext",

            chatlist:[
                {type:'sent',message:"good morning sir whats up?", time:"18:41 AM"},
                {type:'receive',message:"hi its me?", time:"11:41 AM"},
                {type:'sent',message:"welcome to office", time:"12:41 AM"},
                {type:'receive',message:"thats afternoon not moorning", time:"13:41 AM"},
                {type:'sent',message:"new sent", time:"12:41 AM"},
                {type:'receive',message:"thats afternoon not moorning", time:"13:41 AM"},
                
              
              ],
        gravatar:{
          user1:"https://apexonline.ir/wp-content/uploads/2022/10/default-profile-female.png",
           user2:"https://lanmaster.ir/wp-content/uploads/2018/06/Default-User-Picture.jpg" 
        
        }
        
        }
        this.handler=this.handler.bind(this)
    }
handler(message){
  let d=new Date().toLocaleTimeString()
  console.log(message);
this.setState(state=>{
  return{
    
    ...state,
    chatlist:[
      ...state.chatlist,
      {type:'sent',message,time:d},
      
    ]
  }
})
  
}

  render() {
    // console.log(this.state.chatlist[0].message);
        
    return (
            <div className="main">
              <Chat title={this.state.title}/>
            
         
            
              <div className="content">
                <div id='firstdiv'>
          {/* <p>Thur, May 26, 10:41 AM</p> */}

                  {/* <Graytext avatar={this.state.gravatar.user1} sendtex={this.state.sendtex}/> */}
                  <Body chatlist={this.state.chatlist} avatar={this.state} sendtex={this.state}/>
                    <br/><br/><br/><br/>
               
              
                 {/* <Bluetext  avatar={this.state.gravatar.user2} rectex={this.state.rectex}/> */}
            
                </div>
            
              </div>
            <Inputmessage handler={this.handler} />
            
            </div>
          )
    
  }
}


