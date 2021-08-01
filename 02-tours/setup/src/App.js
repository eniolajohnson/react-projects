import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const deleteTour = (id) => {
    const newToursArr = tours.filter((tour) => tour.id !== id);
    setTours(newToursArr);
  }

  const handleSeeAllTours = () => {
    fetchTours();
  }

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <>
      { loading 
      ? <div>
        <Loading />
      </div> 
      : (tours.length === 0)
        ? <div className="title">
          <h2>no tours left</h2>
          <button className='btn' onClick={handleSeeAllTours}>See all available tours</button>
        </div>
        : <main>
          <Tours tours={tours} deleteTour={deleteTour}/>
        </main>
      }
    </>
  )
}

export default App
