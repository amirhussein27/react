import React from 'react'
import Link from './Link'

export default function Leftside(props) {
console.log(props);
let links= props.posts? props.posts.map((post,index)=>
<Link 
key={post.id}
title={post.title}
handleclick={props.changeCurrentPost}
index={index}
/>): null;
  return (
    <div>
       <div className="sidenav">
{links}
</div>
    </div>
  )
}
