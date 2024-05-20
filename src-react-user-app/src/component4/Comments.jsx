import React from 'react'
import Comment from './Comment'
export default function Comments(props) {
  console.log(props.data[0].body);
  let mp=props.data.map(comment=>
   <Comment yt={comment.email}/>)
  return (
    <div>
   {/* <Comment /> */}
   {mp}
   <h6>{props.data[0].body}</h6>
    </div>
  )
}
