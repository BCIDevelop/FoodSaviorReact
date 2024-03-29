import { createContext,useState } from "react";

export const AlertContext=createContext()

export const AlertContextApp=({children})=>{
   
    const [toast,setToast]=useState({visibility:false,message:'',type:''})
    function showToast(message = "",type = "Error"){
        setToast({visibility:true,message:message,type:type})
    }
    function hideToast(){
        setToast({visibility:false,message:'',type: 'Error' })
    }
    return(
        <AlertContext.Provider value={{showToast,hideToast,toast}}>
            {children}
        </AlertContext.Provider>
    )
}
    