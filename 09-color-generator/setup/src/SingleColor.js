import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bgColor = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`
   
  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bgColor})` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
    </article>
  )
}

export default SingleColor;
