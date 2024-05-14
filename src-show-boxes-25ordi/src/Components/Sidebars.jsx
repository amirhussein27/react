import React from 'react';
import Toggle from './Toggles';
export default function Sidebars(props) {

  return (
 <Toggle   onhandler={props.onhandler}
 boxes={props.boxes} activeboxes={props.activeboxes}/>
  )
}
