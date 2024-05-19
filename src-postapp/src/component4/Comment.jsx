import React from 'react'

export default function Comment(props) {
  return (
    <div>
    <div className="comments">{props.comment}</div><br />
    </div>
  )
}
