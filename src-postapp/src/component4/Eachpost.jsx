import React from 'react'

export default function Eachpost(props) {
  console.log(props);
  return (
    <div>
        <h2>Sidebar</h2>
  <img id='img' src="https://www.tehrankit.ir/images/thumbs/0001070_-1.jpeg" alt="" width=""/>
<h1>{props.data.title}</h1>
  <p>{props.data.body}</p>

    </div>
  )
}
