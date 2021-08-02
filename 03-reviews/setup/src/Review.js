import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, id, job, image, text } = people[index];
  const maxLimit = people.length - 1;

  const handlePrev = () => {
    const prevIndex = id - 2;
    if (prevIndex > -1) {
      setIndex(prevIndex);
    } else {
      setIndex(maxLimit)
    }   
  }

  const handleNext = () => {
    const nextIndex = id;
    if (nextIndex < maxLimit) {
      setIndex(nextIndex);
    } else {
      setIndex(0)
    }   
  }

  const handleRandom = () => {
    const randomNum = Math.round(Math.random() * 3);
    console.log(randomNum);
    setIndex(randomNum);
  }

  return (
    <article className='review' key={id}>
      <div className="img-container">
        <img className='person-img' src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <h4 className='job'>{job}</h4>
      <h4 className='info'>{text}</h4>
      <div className='button-container'>
        <button className='prev-btn' onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={handleRandom}>
        See Random
      </button>
    </article>
  )
};

export default Review;
