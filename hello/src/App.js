import React from 'react'
import StickyNote from "./components/stickynote";

console.log('app.js');
function App() {
 return <StickyNote />

}

let container=document.getElementById("container")
let root=ReactDOM.createRoot(container)
root.render(<App />)
