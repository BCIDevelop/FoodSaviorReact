import React,{useRef,useState} from 'react'
import { sortByDate } from '../../utils/handlerDate'
import Alerta from '../../components/alertas/Alerta'
import { ProductModel } from '../../model/ProductModel'

const AlertPage = () => {
    const [alerta,setAlerta]=useState(sortByDate(ProductModel()))
    function dismissedAlert(alertElement){
        setAlerta(prev=> prev.filter(element=> element.internalId!== alertElement))
      }
  return (
    <>
      { alerta.length>0 ? ( alerta.map((element,index)=>(
            <Alerta key={`alert${index}`} index={index} producto={element} dismissedAlert={dismissedAlert}></Alerta>
        ))) : <h2>No se se registran mas productos</h2>}
    </>
  )
}

export default AlertPage
