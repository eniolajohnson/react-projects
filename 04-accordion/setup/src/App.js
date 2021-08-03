import React, { useState, useEffect } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    setDataArr(data);
  }, []);

  return (
    <main className='container'>
        <h2>questions and answers about login</h2>
        {dataArr.map((dataItem) => {
          const { id } = dataItem;
          return (
            <SingleQuestion key={id} {...dataItem}/>
          )
        })}
    </main>
  );
}

export default App;
