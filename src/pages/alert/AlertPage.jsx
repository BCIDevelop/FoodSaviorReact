import { useContext } from 'react'
import React,{useState,} from 'react'
import { sortByDate } from '../../utils/handlerDate'
import Alerta from '../../components/alertas/Alerta'
import { UserContext } from '../../context/UserContext'


const AlertPage = () => {
  const {user}=useContext(UserContext)
    const [alerta,setAlerta]=useState(sortByDate(JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')).filter(element=>element.userId===user.mail) : []))
    
    function dismissedAlert(alertElement){
      localStorage.setItem('products',JSON.stringify(JSON.parse(localStorage.getItem('products')).filter(element=> element.id!== alertElement)) )
      localStorage.setItem('favorites',JSON.stringify(JSON.parse(localStorage.getItem('favorites')).filter(element=> element.productId!==alertElement )) )
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
