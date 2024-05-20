import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Main from './Components/Main'
import Mainbyme from './Components/Mainbyme';
// import Main from './Components/Main';
import Conditional from './Components/Conditional';
import Mainchat from './Components2/Mainchat';
import Increasecounter from './Components2/Increasecounter';
import Cartbox from './component3/cartbox';
import Post from './component4/post';
import Main from './posts/Main';
import Click from './Click';
import Userlist from './Getderived/Userlist';

let myfirst=<h1>hello</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    {/* <Mainchat /> */}
{/* <Increasecounter /> */}
    {/* <Conditional /> */}
{/* <Cartbox/> */}
{/* <Post/> */}
{/* <Main /> */}
<App />
</>
);
// console.log("hiii");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
