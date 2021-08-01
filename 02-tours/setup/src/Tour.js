import React, { useState } from 'react';

const Tour = ({ id, name, image, info, price , deleteTour }) => {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    return setSeeMore(!seeMore);
  }

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{`Price: $${price}`}</h4>
        </div>
        <p>{
          seeMore
          ? info
          : `${info.substring(0, 200)}...`
          } <button onClick={handleSeeMore}>{
            seeMore 
            ? `See less`
            : `See more`
          }</button>
          </p>
        <button className="delete-btn" onClick={() => {deleteTour(id)}}>not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
