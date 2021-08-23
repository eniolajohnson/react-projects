import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [ people, setPeople ] = useState(data);


  return (
    <main>
      <h2>/ reviews</h2>
    </main>
  );
}

export default App;
