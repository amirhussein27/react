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


let myfirst=<h1>hello</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Mainchat />
    {/* <Conditional /> */}
  </React.StrictMode>
);
// console.log("hiii");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
