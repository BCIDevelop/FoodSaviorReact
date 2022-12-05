import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate, Outlet } from "react-router-dom"

const Public=()=>{
    const {user}=useContext(UserContext)
    if (user){
        return  <Navigate to="/home"></Navigate>
    } 
    
    return <Outlet></Outlet>
   
}
export default Public