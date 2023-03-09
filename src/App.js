import './App.css';
import Popup from './Components/Popup';
import { useState } from 'react';
function App() {
  const [buttonPopup , setButton] = useState(false);
  return (
    <div className="App">
      
      <div className='main'>
        <h1>React popups</h1>
        <br />
        <button onClick={()=>setButton(true)}>Open Popup</button>
        <Popup trigger = {buttonPopup} setTrigger ={setButton}>
          <h1>hello woled </h1>
          <h1></h1>
        </Popup>
      </div>
    </div>
  );
}

export default App;
