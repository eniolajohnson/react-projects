import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [dataArr, setDataArr] = useState(data);

  // useEffect(() => {
  //   setDataArr(data);
  // }, []);

  return (
    <main className='container'>
        <h3>questions and answers about login</h3>
        <section className="info">
          {dataArr.map((dataItem) => {
            const { id } = dataItem;
            return (
              <SingleQuestion key={id} {...dataItem}/>
            )
          })}
        </section>
    </main>
  );
}

export default App;
