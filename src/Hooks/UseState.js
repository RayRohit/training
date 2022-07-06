import React, { useState } from 'react'
import UseStateEx from './UseStateEx';

export default function UseState() {
    const data = [
        {
            id:1,
            name:"John Cena"
        },
        {
            id:2,
            name:"Roman Reigns"
        },
        {
            id:3,
            name:"Randy Ortan"
        },
        {
            id:4,
            name:"Seth Freakin Rollins"
        },
    ]
    const[person,setPerson]=useState(data); //UseState Array Example


    const handleRemove=(id)=>{
        const newPerson = person.filter((per)=>per.id !== id);
        setPerson(newPerson)
    }

  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-6'>
                    {person.map((item)=>{
                        const {id,name}=item;
                        return(
                            <div key={id} className="w-50 shadow p-3 mb-3">
                                <h6>{name}</h6>
                                <button className='btn btn-danger' onClick={()=>handleRemove(id)}>Remove</button>

                            </div>
                        )
                    })}
                    
                    <div className='pt-3'>
                        <button className="btn btn-danger" onClick={()=>{setPerson([])}}>clear Items</button>
                    </div>

                </div>
                <div className='col-sm-4'>
                    <UseStateEx />
                </div>

            </div>
        </div>
    </>
  )
}
