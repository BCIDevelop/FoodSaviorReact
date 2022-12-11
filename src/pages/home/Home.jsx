import React,{useState,useEffect,useRef} from 'react'
import './home.css'
import Alerta from '../../components/alertas/Alerta'
import CategoryCards from '../../components/cards/categoryCard/CategoryCards'
import {CategoryModel} from '../../model/CategoryModel'
import { sortByDate } from '../../utils/handlerDate'
import { Link } from 'react-router-dom'
const Home = () => {
  const products=useRef([])
  const [alerta,setAlerta]=useState([])
  function dismissedAlert(alertElement){
  localStorage.setItem('products',JSON.stringify(JSON.parse(localStorage.getItem('products')).filter(element=> element.internalId!== alertElement)) )

    setAlerta(prev=> prev.filter(element=> element.internalId!== alertElement))
  }
  useEffect(()=>{
    const productsDB=JSON.parse(localStorage.getItem('products')) ? JSON.parse(localStorage.getItem('products')) : []
    products.current =sortByDate(productsDB)
    const productos=products.current.slice(0,2)
    setAlerta(productos)  
    products.current.splice(0,1)
   
  },[])
  useEffect(()=>{
    
    if (alerta.length < 2 && alerta.length!==0) {
      products.current.shift()
      if(products.current.length!==0){
      setAlerta(prev=> [...prev, products.current[0]])
     }
    }
  },[alerta])
  return (
    <section className="container__productos">
    <div className="contenedor-sup-alertas">
      <div className="cabecera-alertas">
        <div className="alerta-derecha">
          <p className="icon_inside_alert text-alertas">Alertas</p>
          <i className="icon_inside_alert icon-campana fa-solid fa-bell"></i>
        </div>
      
        <div > <Link className="ver-todo icon_inside_alert" to='/alertas'> VER TODOS</Link> </div>
      </div>
        {alerta.length>0 ? (alerta.map((element,index)=>(
            <Alerta key={`alert${index}`} index={index} producto={element} dismissedAlert={dismissedAlert}></Alerta>
        ))) : <h2>No se registran mas productos</h2>}
    </div>
    <div className="contenedor-infe-products">
      {
        CategoryModel().map((category,index)=>(
          <CategoryCards key={`category${index}`} index={index} categoryName={category.name} ></CategoryCards>
        ))
      }   
    </div>

  </section>
  )
}
export default Home
