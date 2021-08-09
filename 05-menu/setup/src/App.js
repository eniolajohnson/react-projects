import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <div className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu menu={menu}/>
      </div>
    </main>
  );
}

export default App;
