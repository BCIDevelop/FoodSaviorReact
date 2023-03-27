import React,{useEffect} from 'react'
import './home.css'
import Alerta from '../../components/alertas/Alerta'
import CategoryCards from '../../components/cards/categoryCard/CategoryCards'
import {CategoryModel} from '../../model/CategoryModel'
import { Link } from 'react-router-dom'
import  useFetch from '../../hooks/useFetch'
const Home = () => {
  const perPage=10
  const orderBySpoilDate=1
  const context=`products/user?page=1&per_page=${perPage}&ordering_by_spoilDate=${orderBySpoilDate}`
  const [{data},makeFetch,setAlerta]=useFetch({url:context,method:'GET',body:{},hasCredentials:true,makeRender:true})
  async function dismissedAlert(alertElement){
    //await deleteProductService(history,showToast,removeUser,alertElement)
    makeFetch({url:`products/${alertElement}`,method:'DELETE',body:{},hasCredentials:true,makeRender:false})
    setAlerta(prev=> prev.filter(element=> element.id!== alertElement))
  }

  useEffect(()=>{
    if (data.length < 2 && data.length!==0) {
      const products=[...data]
      products.shift()
      if(products.length!==0){
      setAlerta(prev=> [...prev, products[0]])
     }
    }
  },[data])
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
        {data.slice(0,2).length>0 ? (data.slice(0,2).map((element,index)=>(
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
