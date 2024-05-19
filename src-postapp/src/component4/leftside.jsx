import React from 'react'
import Links from './Links'
export default function Leftside(props) {
  console.log(props);
  let links=props.posts ? props.posts.map( (post,index) =>
  <Links 
  key={post.id}
    title={post.title}
       handleClick={props.changeCurrentPost}
       index={index}
       />):null;
  return (
    <div>
           <div className="sidenav">
{links}
</div>
    </div>
  )
}
