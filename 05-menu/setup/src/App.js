import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

console.log(allCategories)

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if (category === 'all'){
      setMenu(items);
      return;
    }
    const newItems = items.filter((item) => {
      return item.category === category;
    })
    setMenu(newItems)
  }

  return (
    <main>
      <div className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenu={filterMenu}/>
        <Menu menu={menu}/>
      </div>
    </main>
  );
}

export default App;
