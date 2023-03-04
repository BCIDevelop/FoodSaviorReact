import { useContext, useEffect } from 'react'
import React,{useState,} from 'react'
import { sortByDate } from '../../utils/handlerDate'
import Alerta from '../../components/alertas/Alerta'
import { UserContext } from '../../context/UserContext'
import { getProductsService,deleteProductService } from '../../globalServices/products.service'
import { AlertContext } from '../../context/AlertContext'
import { useNavigate } from 'react-router-dom'
const AlertPage = () => {
    const [alerta,setAlerta]=useState([])
    const history=useNavigate()
    const {showToast}=useContext(AlertContext)
    const {removeUser}=useContext(UserContext)
    
    async function getAlertas(){
        const results=await getProductsService(history,showToast,removeUser,6,1)
        setAlerta(results)
    }
    useEffect(()=>{
        getAlertas()
    },[])
    async function dismissedAlert(alertElement){
        await deleteProductService(history,showToast,removeUser,alertElement)
        setAlerta(prev=> prev.filter(element=> element.id!== alertElement))
      }
  return (
    <>
      { alerta.length>0 ? ( alerta.map((element,index)=>(
            <Alerta key={`alert${index}`} index={index} producto={element} dismissedAlert={dismissedAlert}></Alerta>
        ))) : <h2>No se se registran más productos</h2>}
    </>
  )
}

export default AlertPage
