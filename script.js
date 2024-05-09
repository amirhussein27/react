let myinp=document.getElementById("myinp")
let mybtn=document.getElementById("mybtn")
let del=document.getElementById("del")
// console.log(mybtn);
// console.log(myinp.value);
let mybody=document.getElementById("mybody")
console.log(mybody);
let myp=document.getElementById("myp")
let array=[]
let myobj={
  id:array.length+1,
  title:myinp.value
}
function hi(){
  let myobj={
    id:array.length+1,
    title:myinp.value
  }

  // console.log(myobj.id);
  // console.log(myobj.title);
  // console.log(array);
  // console.log(myinp.value);
  let newp=document.createElement('p')
  localStorage.setItem(myobj.id,myobj.title)
 

  newp.innerHTML=myobj.title
  // console.log(newp);
  myp.append(newp)
  array.push(myobj)
  myinp.value=""
}

mybtn.addEventListener('click',hi)

function ti(){
  console.log("object");
  let newp=document.createElement('p')
  // localStorage.setItem(myobj.id,myobj.title)
 

  newp.innerHTML=localStorage.getItem(1) +"-"+ localStorage.getItem(2)
  +"-"+ localStorage.getItem(3)+"-"+ localStorage.getItem(4)
  +"-"+ localStorage.getItem(5)

  // console.log(newp);
  myp.append(newp)
}
del.addEventListener('click',function(){
  localStorage.clear()
})