import { createContext,useState } from "react";
export const UserContext=createContext()

export const UserProviderLogin=({children})=>{

    const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')))
    function storeUser(dataUser){
        localStorage.setItem('user',JSON.stringify(dataUser))
        setUser(dataUser)
    }
    function removeUser(){
        localStorage.removeItem('user')
        setUser(undefined)
    }
    return(
        <UserContext.Provider value={{user,storeUser,removeUser}}>
            {children}
        </UserContext.Provider>
    )
}
    