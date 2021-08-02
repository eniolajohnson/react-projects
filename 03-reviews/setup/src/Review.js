import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, id, job, image, text } = people[index];
  // const maxLimit = people.length - 1;

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const handlePrev = () => {
    // const prevIndex = id - 2;
    // if (prevIndex > -1) {
    //   setIndex(prevIndex);
    // } else {
    //   setIndex(maxLimit)
    // }  

    // Shorter implementation
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  const handleNext = () => {
    // const nextIndex = id;
    // if (nextIndex < maxLimit) {
    //   setIndex(nextIndex);
    // } else {
    //   setIndex(0)
    // }   

    // Shorter implementation
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }

  const handleRandom = () => {
    // const randomNum = Math.round(Math.random() * 3);
    // setIndex(randomNum);

    // Shorter implementation
    setIndex((index) => {
      let randomNum = Math.floor(Math.random() * people.length);
      // Deal with repetition when making numbers random
      if (randomNum === index) {
        randomNum = index + 1;
      }
      return checkNumber(randomNum);
    })
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
