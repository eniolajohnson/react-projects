import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bgColor = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  const handleClick = (e) => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  }

  useEffect(() => {
    const timeout = setTimeout(()=> {
      setAlert(false)
    }, 1500)
    return () => clearTimeout(timeout);
  }, [alert])
   
  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bgColor})` }} onClick={handleClick}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && 
        <p className='alert'>
          copied to clipboard
        </p>}
    </article>
  )
}

export default SingleColor;
