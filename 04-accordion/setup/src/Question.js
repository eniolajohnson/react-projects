import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ id, info, title }) => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  }
  return (
    <div className="question">
      { 
        readMore 
        ? <div>
          <header>
            <h3 className='title'>{title}</h3>
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
    </div>
  );
};

export default Question;
