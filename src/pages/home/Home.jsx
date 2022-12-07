import React,{useState,useEffect} from 'react'
import './home.css'
import Alerta from '../../components/alertas/Alerta'
import CategoryCards from '../../components/cards/categoryCard/CategoryCards'
import { ProductModel } from '../../model/ProductModel'
import { sortByDate } from '../../utils/handlerDate'
const Home = () => {

  const [alerta,setAlerta]=useState([])
  function dismissedAlert(alertElement){
    console.log(alertElement)
    console.log(alerta.splice(alertElement))
    setAlerta(prev=> prev.filter(element=> element.internalId!== alertElement))
  }
  useEffect(()=>{
    const productos= sortByDate(ProductModel())
    setAlerta(productos.slice(0,2))
  },[])
  return (
    <section className="container__productos">
   
    
    <div className="contenedor-sup-alertas">
      <div className="cabecera-alertas">
        <div className="alerta-derecha">
          <p className="icon_inside_alert text-alertas">Alertas</p>
          <i className="icon_inside_alert icon-campana fa-solid fa-bell"></i>
        </div>
        <div className="ver-todo icon_inside_alert">VER TODO</div>
      </div>
      
        {alerta.length>0 && alerta.map((element,index)=>(
            <Alerta key={`alert${index}`} index={index} producto={element} dismissedAlert={dismissedAlert}></Alerta>
        ))}
    </div>

    <div className="contenedor-infe-products">
    
      <CategoryCards></CategoryCards>

      

    
     
     
    
    </div>

  </section>
  )
}

export default Home
