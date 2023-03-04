import React,{useState,useEffect,useRef,useContext} from 'react'
import './home.css'
import Alerta from '../../components/alertas/Alerta'
import CategoryCards from '../../components/cards/categoryCard/CategoryCards'
import {CategoryModel} from '../../model/CategoryModel'
import { sortByDate } from '../../utils/handlerDate'
import { Link } from 'react-router-dom'
import { handlerByUser } from '../../utils/handlerAssets'
import {UserContext} from '../../context/UserContext'
import { getProductsService,deleteProductService } from '../../globalServices/products.service'
import { useNavigate } from 'react-router-dom'
import { AlertContext } from "../../context/AlertContext"
const Home = () => {
  const history=useNavigate()
  const products=useRef([])
  const {user,removeUser}=useContext(UserContext)
  const {showToast}=useContext(AlertContext)
  const [alerta,setAlerta]=useState([])
  async function dismissedAlert(alertElement){
    await deleteProductService(history,showToast,removeUser,alertElement)
    setAlerta(prev=> prev.filter(element=> element.id!== alertElement))
  }
  async function getAllProducts(){
    const productsDB=await getProductsService(history,showToast,removeUser,2,1)
    products.current =productsDB
    const productos=products.current.slice(0,2)
    setAlerta(productos)  
    products.current.splice(0,1)
  }
  useEffect(()=>{
    getAllProducts()
   
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
