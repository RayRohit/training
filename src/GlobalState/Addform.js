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
 
    const handleRemove = (item) =>{
            const {id} = item;
            const remove = myData.data.filter((rem)=>rem.id!==id)      
            myData.setData(remove);
            const archiveData = myData.data.filter((arc)=>arc.id === id)
            console.log(archiveData)
            myData.setArchive([...myData.archive,...archiveData])
            console.log(myData.archive);
        }
        const handleEdit = (item) =>{
            setIndex(myData.data.indexOf(item))
            setEditing(true);
            setEditItem(item);
        }


  return (
    <div>
        <div className='text-center pt-4'>

            <div>

                <button className='btn' onClick={() => navigate('/aform')}>
                    <FaArchive /><span className='ps-2'>{myData.archive.length}</span>
                </button>
            </div>
        </div>
        <div className='container-fluid pt-4'>
            <div className='row pt-3'>
                {editing &&
                    <>
                        <div className='offset-sm-3 col-sm-4 shadow p-3'>
                        <h5>Fill the below details..</h5>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor='fname' className='fw-bold'>Name :</label>
                                    <input type="text" className='form-control fw-bolder' maxLength="15" name='fname' id='fname' placeholder={editItem.fname} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor='email' className='fw-bold'>Email :</label>
                                    <input type="email" className='form-control fw-bolder' name='email' maxLength="20" id='email' placeholder={editItem.email} onChange={handleChange} />
                                </div>                        <div>
                                    <label htmlFor='phone' className='fw-bold'>Phone :</label>
                                    <input type="tel" className='form-control fw-bolder' name='phone' maxLength="10" pattern="[6-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]" id='phone' placeholder={editItem.phone} onChange={handleChange} />
                                </div>                        <div>
                                    <label htmlFor='file' className='fw-bold'>Image :</label>
                                    <input type="file" className='form-control fw-bolder' name='file' id='file' onChange={handleChange} />
                                </div>
                                <div>
                                    <button className='btn btn-info' type='submit'>Update</button>
                                </div>
                            </form>
                        </div>
                    </>
                }
                

            </div>
        </div>
         <div className='container-fluid pt-4'>
            <div className='row'>
                {
                    myData.data.map((item)=>{
                        return(
                            <div className='col-sm-4 p-3'  key={item.id}>
                                <div className='card' style={{width:"18rem"}}>
                                    <div>
                                        <img className='card-img' src={URL.createObjectURL(item.file[0])} alt={item.fname} width="200px" height="200px"/>
                                    </div>
                                    <div className='card-body'>
                                        <h6 className='fw-bold'>Name : {item.fname}</h6>
                                        <h6 className='fw-bold'>Email : {item.email}</h6>
                                        <h6 className='fw-bold'>Phone : {item.phone}</h6>
                                        <button className='btn' style={{backgroundColor:"#dc3545",fontSize:"15px"}} onClick={()=>handleRemove(item)}>Remove</button><span className='ps-3'></span>
                                        <button className='btn' style={{backgroundColor:"#ffc107",color:"grey",fontSize:"15px"}} onClick={()=>handleEdit(item)}>Edit</button>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div> 
                
    </div>
  )
}
