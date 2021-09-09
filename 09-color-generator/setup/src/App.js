import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isColor = new Values(color).all(10);
    console.log(isColor)
    // isColor ? 
  }
  return (
    <>
    <section className='container'>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="color"></label> */}
        <input type="text" 
          value={color} 
          placeholder='#ffffff'
          onChange={(e) => {setColor(e.target.value)}} />
        <button className="btn" type='submit'>submit</button>
      </form>
    </section>
    <section className="colors">
      <h4>list goes here</h4>
    </section>
    </>
  )
}

export default App
