import React, { useEffect, useRef, useState } from 'react'

export default function Control() {

    const[person,setPerson]=useState({fname:'',email:'',phone:'',file:null})
    const[data,setData]=useState([])
    const[isEditing,setIsEditing]=useState(false);
    const[editItem,setEditItem] = useState(person)
    const [index,setIndex] = useState(0)

    const handleChange=(e)=>{
        if(isEditing){
            const name=e.target.name;
            const value=e.target.value;
            const file =e.target.files;
            if(file !== null){
                let obj = editItem
                obj[`${name}`] = file
                setEditItem(obj)
            }else{
                let obj = editItem
                obj[`${name}`] = value
                setEditItem(obj)
            }
        }
        else{
            const name=e.target.name;
            const value=e.target.value;
            const file =e.target.files;
            file===null ? setPerson({...person,[name]:value}) : setPerson({...person,[name]:file})
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(data);
        if(isEditing){
            data.splice(index,1,editItem)
            setIsEditing(false)
        }
        else if(person.fname && person.email && person.phone && person.file && !isEditing){
            const newPerson = {...person,id:new Date().getTime().toString()};
            setData([...data,newPerson]);
            setPerson({fname:'',email:'',phone:'',file:null});       
        }
    }

    const handleRemove = (item) =>{
        const {id} = item;
        const newData = data.filter((rem)=>rem.id!==id);
        setData(newData)
    }

    const handleEdit = (item) =>{
        // const {id} = item;
        // const specificItem = data.find((spitem)=> spitem.id === id);
        setIndex(data.indexOf(item))
        setIsEditing(true)
        setEditItem(item)
    }

    const reff=useRef(null);
    useEffect(()=>{
        reff.current.focus();
    },[])

    function Details(){
        return(
            <>
            <div className='offset-sm-3 col-sm-6 shadow p-3'>
                <form className='pt-2' onSubmit={handleSubmit}>
                    <h4 className='fw-bolder'>Fill The Below Details</h4>
                    <div>
                        <label htmlFor='fname' className='fw-bold'>Name:</label>
                        <input className='form-control fw-bold' maxLength="15" name='fname' ref={reff} type="text" placeholder={editItem.fname} id='fname' onChange={handleChange}  />
                    </div>
                    <div className='pt-2'>
                        <label htmlFor='email' className='fw-bold'>Email:</label>
                        <input className='form-control fw-bold' maxLength="20" type="email" placeholder={editItem.email} name='email' id='email' onChange={handleChange}  />
                    </div>
                    <div className='pt-2'>
                        <label htmlFor='phone' className='fw-bold'>Phone:</label>
                        <input className='form-control fw-bold' type="tel" maxLength="10" pattern="[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]" name='phone' placeholder={editItem.phone} onChange={handleChange} id='phone'  />
                    </div>
                    <div className='pt-2'>
                        <label htmlFor='file' className='fw-bold'>Image:</label>
                        <input className='form-control' type="file"   name='file' onChange={handleChange} id='file'  />
                    </div>
                    <div>
                        <button className='btn' type='submit'>Update</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
   
  return (
    <div className='container-fluid pt-4'>
        <div className='row p-3'>
            {
                isEditing ? Details() : 
                <>
                <div className='offset-sm-3 col-sm-6 shadow p-3'>
                    <form className='pt-2' onSubmit={handleSubmit}>
                        <h4 className='fw-bolder'>Fill The Below Details</h4>
                        <div>
                            <label htmlFor='fname' className='fw-bold'>Name:</label>
                            <input className='form-control fw-bold' maxLength="15" ref={reff} type="text" value={person.fname} name='fname' id='fname' onChange={handleChange} required />
                        </div>
                        <div className='pt-2'>
                            <label htmlFor='email' className='fw-bold'>Email:</label>
                            <input className='form-control fw-bold' maxLength="20" type="email" value={person.email} name='email' id='email' onChange={handleChange} required />
                        </div>
                        <div className='pt-2'>
                            <label htmlFor='phone' className='fw-bold'>Phone:</label>
                            <input className='form-control fw-bold' type="tel" maxLength="10" pattern="[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]" name='phone' value={person.phone} onChange={handleChange} id='phone' required />
                        </div>
                        <div className='pt-2'>
                            <label htmlFor='file' className='fw-bold'>Image:</label>
                            <input className='form-control' type="file"   name='file' onChange={handleChange} id='file' required />
                        </div>
                        <div>
                            <button className='btn' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
                </>
            }

        </div>
        <div className='container-fluid'>
        <div className="row">            
        {data.map((item)=>{
                return(
                    <div className='col-sm-3 col-md-6 col-lg-4 pt-4' key={item.id}>
                        <div className='card mx-auto' style={{width:"19rem"}}>
                            <div>
                                <img className='card-img' src={URL.createObjectURL(item.file[0])} alt={item.name} width="200px" height="200px"/>
                            </div>
                            <div className='card-body'>
                                <h4>Name : {item.fname}</h4>
                                <h4>Email : {item.email}</h4>
                                <h4>Phone : {item.phone}</h4>
                                <button className='btn' onClick={()=>handleRemove(item)}>Remove</button><span className='ps-3'></span>
                                <button className='btn' onClick={()=>handleEdit(item)}>Edit</button>

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
