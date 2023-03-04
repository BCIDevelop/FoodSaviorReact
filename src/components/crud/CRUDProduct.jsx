import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { useRef } from 'react'
import ListProduct from './ListProduct'
import UpdateProduct from './UpdateProduct'
import { ProductModel } from '../../model/ProductModel'
import CreateProduct from './CreateProduct'
import { getAllProductsService } from '../../globalServices/products.service'
import { useNavigate } from 'react-router-dom'
import { AlertContext } from '../../context/AlertContext'
import {UserContext} from "../../context/UserContext"
import { LoaderContext } from '../../context/LoaderContext'

const CRUDProduct = () => {
  // const products=useRef([])
  const [products,setProducts]=useState([])
  const lsName = "products";
  const { action } = useParams();
  const { id } = useParams();
 
  const {toogleLoader} = useContext(LoaderContext)
  const history=useNavigate()
  const {showToast}=useContext(AlertContext)
  const {removeUser}=useContext(UserContext)

  async function getProducts(){
    const response=await getAllProductsService(history,showToast,removeUser)
    toogleLoader()
    // favoritos.current=response
    setProducts(response)
  }
  useEffect(()=>{
    toogleLoader()
    getProducts()
  },[])
  // if( localStorage.getItem(lsName) === null){ localStorage.setItem( lsName, JSON.stringify(ProductModel()) );}
  // const data = JSON.parse(localStorage.getItem(lsName));
  // const data = 
  let component = null;
  if ( action === "update" && parseInt( id || 0 ) ){
    component = <UpdateProduct data={products} id={parseInt( id || 0 )} />
  }else if ( action === "create" ){ 
    const newForm = {
      id : 0,
      favorite: 0,
      name : "",
      src : "",
      alt: "",
      spoilDate:new Date(),
      unit : "",
      bardcode : "",
      category: 0,
      userId:''
    };
    component = <CreateProduct data={newForm} />
  }else{
    component = <ListProduct data={products} /> 
  }

  return (
    <div className="bodyWroduct">
      {component}
    </div>
  )
}

export default CRUDProduct
