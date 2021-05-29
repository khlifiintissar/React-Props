import './App.css';
import Profile from "./profile/Profile";

function App(){
  const handlename=x=>alert(x)
  return(
    <div>
    
    <Profile fullName="Tom Hardy" bio="" profession="Hollywood Actor" handleName={handlename}>{<img src='./tomHardy.jpg' alt='tommy'/>}</Profile>
    </div>
  );
}

export default App;
