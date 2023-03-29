import './style.css';
import {useEffect} from 'react';
import ThreeD from './main';


function App() {

useEffect(() => {
  ThreeD();
})

  return (
     <div id="container">
        
        <canvas id="bg"></canvas>
        <div id="canvas-text"> Deployed on Vercel - sh9hid@github.com </div>
    </div>
  );
}

export default App;
