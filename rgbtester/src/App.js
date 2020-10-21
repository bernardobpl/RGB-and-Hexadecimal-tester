import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [red,setRed] = useState(255);
  const [red2,setRed2] = useState(255);
  const [green,setGreen] = useState(255);
  const [green2,setGreen2] = useState(255);
  const [blue,setBlue] = useState(255);
  const [blue2,setBlue2] = useState(255);
  const [hexadecimal, setHexadecimal] = useState("");
  const [hexadecimal2, setHexadecimal2] = useState();
  const [transparency, setTransparency] = useState(1);

  useEffect( () => {
    setHexadecimal(toHexa(red,green,blue));
  },[red,green,blue])

  useEffect(()=>{
    toRGB(hexadecimal2,2);
  },[hexadecimal2])

  const hexaRegex = new RegExp('([A-F]|[a-f]|[0-9]){6}', 'g');
  const letter2num = {
    'A': () => {return 10},
    'B': () => {return 11},
    'C': () => {return 12},
    'D': () => {return 13},
    'E': () => {return 14},
    'F': () => {return 15},
  }

  const num2letter = {
    10: () => {return 'A'},
    11: () => {return 'B'},
    12: () => {return 'C'},
    13: () => {return 'D'},
    14: () => {return 'E'},
    15: () => {return 'F'},
  }

  const toHexa = (r=255,g=255,b=255) => {
    let r1 = r/16 >= 10 ? num2letter[Math.trunc(r/16)]() : Math.trunc(r/16);
    let r2 = r%16 >= 10 ? num2letter[r%16]() : r%16;
    let g1 = g/16 >= 10 ? num2letter[Math.trunc(g/16)]() : Math.trunc(g/16);
    let g2 = g%16 >= 10 ? num2letter[g%16]() : g%16;
    let b1 = b/16 >= 10 ? num2letter[Math.trunc(b/16)]() : Math.trunc(b/16);
    let b2 = b%16 >= 10 ? num2letter[b%16]() : b%16;
    return r1+r2+g1+g2+b1+b2;
  }

  const toRGB = (hexa='FFFFFF',ind) => {
    if(hexa.match(hexaRegex)){
      hexa = hexa.toUpperCase();
      let hexaChar = hexa.split('',6);
      hexaChar = hexaChar.map(char => char.match(/\d/i) ? parseInt(char): char=parseInt(letter2num[char]()))
      let hred = hexaChar[0]*16 + hexaChar[1];
      let hgreen = hexaChar[2]*16 + hexaChar[3];
      let hblue = hexaChar[4]*16 + hexaChar[5];
      if(ind===1){
        setRed(hred);
        setGreen(hgreen);
        setBlue(hblue);
      }
      if(ind===2){
        setRed2(hred);
        setGreen2(hgreen);
        setBlue2(hblue);
      }
      return `rgb(${red}${green}${blue}${transparency})`
    }
    return
  }


  return (
    <div className="App">
      <div className="content">
        <div className="title">
          <h1 className="h1-title">
            <span className="red">R</span> 
            <span className="green">G</span> 
            <span className="blue">B</span> 
          </h1>
          <div className="input-line-height">
            <h1>#</h1>
            <input type="text" className="hexadecimal-input" maxLength="6" value={hexadecimal} 
            onChange={(e) => {
              setHexadecimal(e.target.value);
              toRGB(e.target.value,1)
            }} 
              placeholder="FFFFFF"/>
          </div>
        </div>
          
        
        <label className="red">Red</label>
        <div className="color-slider">
          <input type="range" className="input-slider" id="red" min="0" max="255" value={red} onChange={e => {setRed(e.target.value)}}>
          </input>
          <div className="rgb-value">
              <input id="input-value-red" type="text" className="red input-value" maxLength="3" value={red} onChange={e => setRed(e.target.value)}/>
          </div>
        </div>

        <label className="green">Green</label>
        <div className="color-slider">
          <input type="range" className="input-slider" id="green" min="0" max="255" value={green} onChange={e => {setGreen(e.target.value)}}> 
          </input>
          <div className="rgb-value">
              <input id="input-value-green" type="text" className="green input-value" maxLength="3" value={green} onChange={e => setGreen(e.target.value)}/>
          </div>
        </div>

        <label className="blue">Blue</label>
        <div className="color-slider">
          <input type="range" className="input-slider" id="blue" min="0" max="255" value={blue} onChange={e => {setBlue(e.target.value)}}>
          </input>
          <div className="rgb-value">
              <input id="input-value-blue" type="text" className="blue input-value" maxLength="3" value={blue} onChange={e => setBlue(e.target.value)}/>
          </div>
        </div>
        <label>Transparency</label>
        <div className="color-slider">
        <input type="range" className="input-slider" id="transparency" min="0" max="1" step="0.1" value={transparency} onChange={e => {setTransparency(e.target.value)}}/>
          <div className="rgb-value">
              <input type="text" className="white input-value" value={transparency} maxLength="3" onChange={e => setTransparency(e.target.value)}/>
          </div>
        </div>

        <div className="result-div content-2">
          <div className="color-formed" style={{backgroundColor: `rgb(${red},${green},${blue},${transparency})`}}></div>
          <div className="css-div">
            <span className="css-hexa">{`#${hexadecimal};`}</span>
            <span className="css-rgb">{`rgb(${red},${green},${blue},${transparency});`}</span>
          </div>
        </div>
      </div>

      <div className="content content-2">
        <div className="result-div">
          <input type="color" className="color-formed" onChange={(e)=>setHexadecimal2(e.target.value.split('#',2)[1].toUpperCase())}/>
          <div className="css-div">
              <span className="css-hexa">{`${hexadecimal2};`}</span>
              <span className="css-rgb">{`rgb(${red2},${green2},${blue2},1);`}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
