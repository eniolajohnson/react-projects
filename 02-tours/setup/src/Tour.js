import React, { useState } from 'react';

const Tour = ({ tours }) => {
  return (
    <div>
      {tours.map(tour => {
      const {id, name, info, image, price} = tour;
      return <div key={id}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{`Description: ${info}`}</p>
        <p>{`Price: ${price}`}</p>
      </div>
    })}
    </div>
  )
};

export default Tour;
