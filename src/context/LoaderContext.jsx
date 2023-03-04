import { createContext,useState } from "react";
export const LoaderContext=createContext()

export const LoaderContextApp=({children})=>{
   
    const [loader,setLoader]=useState(false)
    function toogleLoader(){
        setLoader(prev=>!prev)
    }
   
    return(
        <LoaderContext.Provider value={{toogleLoader,loader}}>
            {children}
        </LoaderContext.Provider>
    )
}
    