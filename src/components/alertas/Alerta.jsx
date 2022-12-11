import React,{ useEffect,useState } from 'react'
import './alerta.css'
import defaultImage from '../../assets/defaultImage.png'
import { remainingDate } from '../../utils/handlerDate'
const Alerta = ({producto,dismissedAlert,index}) => {
   let timerID
  function dismissAlert(){
    document.querySelector(`.alerta${index}`).classList.add('dismissed')
    timerID =setTimeout(()=>{
        dismissedAlert(producto.internalId)
    },1000)
   
  }
  useEffect(()=>{
   return ()=> clearTimeout(timerID)
  })
  return (
    <ul className={`contenedor-alerta alerta${index}`}>
        <li className="alerta-detalle">
          <img className="img-product-alert" src={defaultImage} alt="" />
         
          <p className="alerta-mensaje">
          
            {remainingDate(producto.spoilDate)>0 ? `Faltan ${remainingDate(producto.spoilDate)} dias para que ${producto.name} venza`
            : `El producto ${producto.name}  vencio hace ${Math.abs(remainingDate(producto.spoilDate))} dias`}
          </p>
        </li>
        <div className="alerta-acciones">
          <button onClick={dismissAlert} className="accion-boton">CONSUMIDO</button>
          <button onClick={dismissAlert} className="accion-boton">ELIMINAR</button>
        </div>
      </ul>
  )
}

export default Alerta
