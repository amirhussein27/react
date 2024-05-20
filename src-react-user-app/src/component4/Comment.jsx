import React from 'react'

export default function Comment(props) {
  console.log(props.yt);
  return (
    <div>
    <div className="comments">{props.yt}</div><br />
    </div>
  )
}
