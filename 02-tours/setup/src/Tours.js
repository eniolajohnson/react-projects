import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map( tour => {
          const { id } = tour;
          return <Tour key={id} {...tour} deleteTour={deleteTour}/>
        })}
      </div>
    </section>
  );
};

export default Tours;
