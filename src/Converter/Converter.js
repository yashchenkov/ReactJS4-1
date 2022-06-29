import React, { useState } from 'react';


export default function Converter() {
  const [ hex, setHex ] = useState('');
  const [ rgb, setRgb ] = useState('');


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
        setHex('')
      }
  	}
  	
  }

  return(<div className="result" style={{ backgroundColor: rgb }}>
  	  <input className="hex-input" type="text" value={hex} onChange={handleChange}/>
      <span className="">{rgb}</span>
  	</div> );
}