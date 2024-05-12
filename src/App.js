import logo from './logo.svg';
import './App.css';
import Stickynote from './Components/Stickynote';
let notedata=[
  {title:'title #1', content:'#1'},
  {title:'title #2', content:'#2'},
  {title:'title #3', content:'#3'},
  {title:'title #4', content:'#4'},
]
function App(props) {
  


let notes=notedata.map((note,index)=> <Stickynote key={index} title={note.title} content={note.content} />)
console.log(notes);  
return (
    <div>
      <button id='btn' onClick={addc}>add</button>
{notes}
   </div>
  );
}
function addc() {
 Apps()
 App()
}
function Apps(){
  let gr=  {title:'title #12', content:'#12'}

  console.log(notedata);
  notedata.push(gr)
}

export default App;
