import React, { useState } from 'react'
import menu from './Category'
import './Menu.css'

export default function Menu() {
const[items]=useState(menu);
const [choice,setChoice] = useState(null)
console.log(choice)

  return (
    <div>
        <div className='container'>
            <div className='title'>
                <h2 className='pt-3'>Our Menu</h2>
                <div className='underline'></div>
            </div>
            <div className='title'>
              <div className='row'>
                <div className='col-sm-3'>
                  <button className='border-0 fw-bolder menu-btn' onClick={() => setChoice(null)}>All</button>
                </div>
                <div className='col-sm-3'>
                  <button className='border-0 fw-bolder menu-btn' onClick={() => setChoice('breakfast')}>Breakfast</button>
                </div>
                <div className='col-sm-3'>
                  <button className='border-0 fw-bolder menu-btn' onClick={() => setChoice('lunch')}>Lunch</button>
                </div>
                <div className='col-sm-3'>
                  <button className='border-0 fw-bolder menu-btn' onClick={() => setChoice('shakes')}>Shakes</button>
                </div>
              </div>
            </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
                    {items.map((item)=>{
                        
                      if(item.category === choice && choice !== null)
                        return(
                            <div className='col-sm-4 p-3' key={item.id}>
                              <div className="card" style={{width: "18rem"}}>
                                <div>
                                  <img src={item.img} class="card-img-top" alt={item.title} height="200px"/>
                                </div>  
                                <div className="card-body">
                                  <h4>{item.title}
                                    <span className='fw-bolder float-end  p-1 ' style={{fontSize:"13px"}}>${item.price}</span>
                                    <p className='fw-normal fs-6 pt-3 text-start'>{item.desc}</p>
                                  </h4>
                                </div>
                              </div>
                            </div>
                        )
                        else if(choice === null)
                          return(
                            <div className='col-sm-3 p-3' key={item.id}>
                              <div className="card" style={{width: "18rem"}}>
                                <div>
                                  <img src={item.img} class="card-img-top" alt={item.title} height="200px"/>
                                </div>  
                                <div className="card-body">
                                  <h4>{item.title}
                                    <span className='fw-bolder float-end' style={{fontSize:"13px"}}>${item.price}</span>
                                    <p className='fw-normal fs-6 pt-3 text-start'>{item.desc}</p>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          )

                    })}
          </div>
        </div>
    </div>
  )
}


