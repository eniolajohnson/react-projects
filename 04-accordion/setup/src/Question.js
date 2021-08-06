import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, info, title }) => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  }
  return (
    <article className="question">
      { 
        readMore 
        ? <div>
          <header>
            <h4 className='title'>{title}</h4>
            <button onClick={handleReadMore} className="btn">
              <AiOutlineMinus />
            </button>
          </header>
          <p className='question'>{info}</p>
        </div>
        : <div>
          <header>
          <h3 className='title'>{title}</h3>
          <button onClick={handleReadMore} className="btn">
            <AiOutlinePlus />
          </button>
          </header>
        </div>
    }
    </article>
  );
};

export default Question;
