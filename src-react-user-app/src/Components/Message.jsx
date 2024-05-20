import React from 'react'

export default function Message(props) {
    if(!props.islogedin){
        return null;
    }
        return <p>live</p>;

 
}
