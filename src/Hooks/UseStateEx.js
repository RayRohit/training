import React, { useState } from 'react'
import './UseStateEx.css'

export default function UseStateEx() {
    const data = [
        {
          id: 1,
          name: 'Bertie Yates',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        },
        {
          id: 2,
          name: 'Hester Hogan',
          age: 32,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
        },
        {
          id: 3,
          name: 'Larry Little',
          age: 36,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        },
        {
          id: 4,
          name: 'Sean Walsh',
          age: 34,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        },
        {
          id: 5,
          name: 'Lola Gardner',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        },
      ];
      const[bday,setBday]=useState(data);
  return (
    <>
        <div className='text-center shadow p-3'>
                <section className='container'>
                  <h3>{bday.length} birthdays today</h3>
                  {bday.map((item) => {
                    const { id, name, age, image } = item;
                        return (
                            <div className='per' key={id}>
                                <img src={image} alt={name} />
                                <div className='d-flex'>
                                <span className='ps-5'>
                                    <h4>{name}</h4>
                                    <h6>{age} years</h6>
                                </span>
                                </div>
                                
                            </div>
 
                        );    
                    })}
                  <button className='btn btn-danger' onClick={() => setBday([])}>clear all</button>
                </section>
        </div>
    </>
  )
}
