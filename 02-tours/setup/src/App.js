import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch(error){
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <>
      { loading 
      ? <main>
        <Loading />
      </main> 
      : 
      <div>
        
      </div>
      }
    </>
  )
}

export default App
