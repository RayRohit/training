import React, { useContext, useState } from 'react'
import { ContextState } from './MainState'
import {FaArchive,FaShoppingCart} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

export default function Formss() {
    const myData = useContext(ContextState);
    const [person,setPerson] = useState({
        fname:'',
        email:'',
        phone:'',
        file:null,
    })


    const navigate = useNavigate()

    const[editing,setEditing] = useState(false);
    const[editItem,setEditItem] = useState(person);
    // const[isArchive,setIsArchive] = useState(false)
    const[index,setIndex]=useState(0)

    const handleChange = (e) =>{
        if(editing){
            const name = e.target.name;
            const value = e.target.value;
            const file = e.target.files;
            if(file === null){
            const obj = editItem;
            obj[`${name}`] = value
            setEditItem(obj)
            }
            else{
                let obj = editItem;
                obj[`${name}`]=file;
                setEditItem(obj)
            }
        }
        else{
            const name = e.target.name;
            const value = e.target.value;
            const file = e.target.files;
            file === null ? setPerson({...person,[name]:value}):setPerson({...person,[name]:file})
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(editing){
            myData.data.splice(index,1,editItem);
            setEditing(false)
        }
        else if(person.fname && person.email && person.phone && person.file && !editing){
            let newPerson = {...person,id:new Date().getTime().toString()}
            myData.setData([...myData.data,newPerson])
            setPerson({fname:'',email:'',phone:'',file:null});
        }
    }
 
  

   
  return (
    <div>
        <div className='text-center pt-4'>

            <div>
                <button className='btn' onClick={()=>navigate('/addform')}>
                    <FaShoppingCart /><sapn className="ps-2">{myData.data.length}</sapn>
                </button><span className='ps-3'></span>

            </div>
        </div>
        <div className='container-fluid pt-4'>
            <div className='row pt-3'>

                    <>
                        <div className='offset-sm-3 col-sm-4 shadow p-3'>
                        <h5>Fill the below details..</h5>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor='fname' className='fw-bold'>Name :</label>
                                    <input type="text" className='form-control fw-bolder' maxLength="15" name='fname' id='fname' value={person.fname} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor='email' className='fw-bold'>Email :</label>
                                    <input type="email" className='form-control fw-bolder' name='email' maxLength="20" id='email' value={person.email} onChange={handleChange} />
                                </div>                        <div>
                                    <label htmlFor='phone' className='fw-bold'>Phone :</label>
                                    <input type="tel" className='form-control fw-bolder' name='phone' maxLength="10" pattern="[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]" id='phone' value={person.phone} onChange={handleChange} />
                                </div>                        <div>
                                    <label htmlFor='file' className='fw-bold'>Image :</label>
                                    <input type="file" className='form-control fw-bolder' name='file' id='file' onChange={handleChange} />
                                </div>
                                <div>
                                    <button className='btn btn-info' type='submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </>
                

            </div>
        </div>

                
    </div>
  )
}
