import { createContext,useState } from "react";
export const UserContext=createContext()

export const UserProviderLogin=({children})=>{
    const [user,setUser]=useState(JSON.parse(sessionStorage.getItem('user')))
    function storeUser(dataUser){
        sessionStorage.setItem('user',JSON.stringify(dataUser))
        setUser(dataUser)
    }
    function removeUser(){
        setUser(undefined)
    }
    return(
        <UserContext.Provider value={{user,storeUser,removeUser}}>
            {children}
        </UserContext.Provider>
    )
}
    