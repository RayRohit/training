import React, { useState } from 'react'

export default function Tours({tours,removeTour}) {
  return (
    <div className='title'>
      <h2>Our Tours</h2>
      <div className='underline'></div>
      <div>
        {tours.map((tour)=>{
          return(
            <Tour key={tour.id} {...tour} removeTour={removeTour} />
          )
        })}
      </div>
    </div>
  )
}

function Tour({id,image,price,name,info,removeTour}) {
  const[readmore,setReadMore]=useState(false);
  return (
    <div>
      <div className='single-tour'>
        <div>
          <img src={image} alt={info} />
          <footer>
            <div className='tour-info'>
              <h4>{name}</h4>
              <h4 className='tour-price'>${price}</h4>
            </div>
            <p>{readmore ?info : `${info.substring(0,200)}`}...
              <button onClick={()=>{setReadMore(!readmore)}}>{readmore ? "Show Less" : "Read More"}</button>
            </p>
            <button className='delete-btn' onClick={()=>removeTour(id)}>Not Intrested</button>
          </footer>

        </div>
      </div>
    </div>
  )
}