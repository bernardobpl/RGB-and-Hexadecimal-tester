import React, { useState } from 'react';
import './App.css';

function App() {
  const [red,setRed] = useState(255);
  const [green,setGreen] = useState(255);
  const [blue,setBlue] = useState(255);

  return (
    <div className="App">
      <div className="content">
        <h1><span className="red">R</span> <span className="green">G</span> <span className="blue">B</span></h1>
        
        <label className="red" for="red">Red</label>
        <div className="color-slider">
          <input type="range" id="red" min="0" max="255" value={red} onChange={e => {
              document.getElementById("input-value-red").value=red;
              setRed(e.target.value)}}>
          </input>
          <div className="rgb-value">
              <input id="input-value-red" type="text" className="red input-value" onChange={e => setRed(e.target.value)}/>
          </div>
        </div>

        <label className="green" for="green">Green</label>
        <div className="color-slider">
          <input type="range" id="green" min="0" max="255" value={green} onChange={e => {
              document.getElementById("input-value-green").value=green;
              setGreen(e.target.value)}}> 
          </input>
          <div className="rgb-value">
              <input id="input-value-green" type="text" className="green input-value" onChange={e => setGreen(e.target.value)}/>
          </div>
        </div>

        <label className="blue" for="blue">Blue</label>
        <div className="color-slider">
          <input type="range" id="blue" min="0" max="255" value={blue} onChange={e => {
              document.getElementById("input-value-blue").value=blue;
              setBlue(e.target.value)}}>
          </input>
          <div className="rgb-value">
              <input id="input-value-blue" type="text" className="blue input-value" onChange={e => setBlue(e.target.value)}/>
          </div>
        </div>

        <div className="color-formed" style={{backgroundColor: `rgb(${red},${green},${blue})`}}></div>
        
      </div>
    </div>
  );
}

export default App;
