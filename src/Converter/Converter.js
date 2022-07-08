import React, { useState } from 'react';


export default function Converter() {
  const [ hex, setHex ] = useState('');
  const [ rgb, setRgb ] = useState('');
  const [ result, setResult ] = useState('');


  const handleChange = evt => {
  	setHex(evt.target.value);
  	if(hex.length === 7) {
  	  let bigint = parseInt(hex.split('#')[1], 16);
      if(isNaN(bigint)) {
        setRgb('Ошибка!');
        setHex('');
      } else {
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        setRgb('rgb('+r+','+g+ ','+b+')');
        if(hex === '#000000') {
          setResult('rgb(255,255,255)')
        } else {
          setResult('rgb('+(r - 80) +','+(g - 80) + ','+(b - 80)+')')
        }
        setHex('')
      }
  	}
  	
  }
  if(rgb === 'Ошибка!'){
    return(<div className="result" style={{ backgroundColor: 'red' }}>
      <input className="hex-input" type="text" value={hex} onChange={handleChange}/>
      <div className="rgb-container" style={{ backgroundColor: result }}> 
        <span className="">{rgb}</span>
      </div>
    </div> );
  }
  return(<div className="result" style={{ backgroundColor: rgb }}>
  	  <input className="hex-input" type="text" value={hex} onChange={handleChange}/>
      <div className="rgb-container" style={{ backgroundColor: result }}> 
        <span className="">{rgb}</span>
      </div>
  	</div> );
}