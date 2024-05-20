import React from 'react'

export default function Userselector(props) {
    console.log(props);
  return (
    <div>
                <div>
        <div className="user"> <span className='fs'>users</span>
        {props.users && props.users.map((user,index)=>{
            return(
                <>
                <input 

                onChange={()=>props.changehandler(index)}
                checked={ index===props.selectedIndex} 
                type="radio"
                 id="html"
                  name="fav_language" 
                  value="HTML"/>
                <label htmlFor="html"
                >{user}</label>
                </>
            )
        })}

         {/* <input type="radio" id="html" name="fav_language" value="HTML"/>
        <label for="html">HTML</label>

        <input type="radio" id="css" name="fav_language" value="CSS"/>
        <label for="css">CSS</label>

        <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
        <label for="javascript">JavaScript</label> */}

      </div>
    </div>
    </div>
  )
}
