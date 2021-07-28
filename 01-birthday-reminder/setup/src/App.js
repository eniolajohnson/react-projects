import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  const handleClick = () => {
    setPeople([]);
  }
  return <div>
    <h3>{people.length} people have their  birthdays today</h3>
    <List people={people}/>
    <button onClick={handleClick}>
      clear all</button>
  </div>;
}

export default App;
