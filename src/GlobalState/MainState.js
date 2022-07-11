import React, { createContext,useState } from 'react'

export const ContextState = createContext();
export default function MainState(props) {
    const[data,setData]=useState([]);
    const[archive,setArchive] = useState([])
    
    // useEffect(()=>{
    //   console.log(data);
    //   console.log("archived data",archive);
    // },[data])
  return (
    <div>
        <ContextState.Provider value={{data,setData,archive,setArchive}}>
            {props.children}
        </ContextState.Provider>
    </div>
  )
}
