import React,{useContext} from 'react'
import { ContextState } from './MainState';
import {useNavigate} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'

export default function Aform() {
    const navigate = useNavigate();
    const myData = useContext(ContextState);
    const handleRestore = (item) =>{
        const {id} = item;
        const addValue = myData.archive.filter((add)=>add.id === id);
        myData.setData([...myData.data,...addValue])
        const removeValue = myData.archive.filter((rem)=>rem.id!==id)
        myData.setArchive(removeValue)
        console.log(addValue);
        
    }
  return (
        <div className='container-fluid pt-4'>
            <div className='text-center'>
                <button className='btn' onClick={()=>navigate('/addform')}>
                    <FaShoppingCart /><sapn className="ps-2">{myData.data.length}</sapn>
                </button><span className='ps-3'></span>
            </div>
            <div className='row pt-4'>
                <h3 className='text-center text-danger'>Archived Data</h3>
                {
                    myData.archive.map((item)=>{
                        return(
                            <div className='col-sm-4 pt-4'  key={item.id}>
                                <div className='card' style={{width:"18rem"}}>
                                    <div>
                                        <img className='card-img' src={URL.createObjectURL(item.file[0])} alt={item.fname} width="200px" height="200px"/>
                                    </div>
                                    <div className='card-body'>
                                        <h6 className='fw-bold'>Name : {item.fname}</h6>
                                        <h6 className='fw-bold'>Email : {item.email}</h6>
                                        <h6 className='fw-bold'>Phone : {item.phone}</h6>
                                        <button className='btn' onClick={()=>handleRestore(item)}>
                                            Restore
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}
