import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import './Effect.css'
import axios from 'axios'
const url = 'https://course-api.com/react-tours-project'

function Main() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const fetchTours = async ()=>{
    const response = await axios(url);
    setLoading(true)
    setTours(response.data);
    setLoading(false)
    console.log(tours);

  }


  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default Main;