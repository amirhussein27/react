import React from 'react'
import Usergreeting from './Usergreeting'
import Guestgreeting from './Guestgreeting'


export default function Greeting(props) {
    if(props.islogedin){
return <Usergreeting />
    }
 else{
  return  <Guestgreeting />
 }
}

