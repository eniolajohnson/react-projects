import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#800020').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let isColor = new Values(color).all(10);
      setList(isColor);
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  return (
    <>
    <section className='container'>
      <form onSubmit={handleSubmit}>
        <input type="text" 
          value={color} 
          placeholder='#800020'
          onChange={(e) => {setColor(e.target.value)}} />
        <button className="btn" type='submit'>submit</button>
      </form>
    </section>
    <section className="colors">
      {list.map((color, index) => {
        console.log(color)
        return <SingleColor key={index} {...color} hexColor={color.hex} index={index}/>
      })}
    </section>
    </>
  )
}

export default App
