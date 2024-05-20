import logo from './logo.svg';
import './App.css';
import Userlist from './Getderived/Userlist';

let users=[
  1,2,3,4
]
function App() {
  


return (
    <div>
<Userlist users={users}/>
   </div>
  );
}


export default App;
