import React,{useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { useRef } from 'react'
import ListProduct from './ListProduct'
import UpdateProduct from './UpdateProduct'
import { ProductModel } from '../../model/ProductModel'
import CreateProduct from './CreateProduct'
import { getAllProductByUser } from '../../globalServices/products.service'
import { useNavigate } from 'react-router-dom'
import { AlertContext } from '../../context/AlertContext'
import {UserContext} from "../../context/UserContext"
import { LoaderContext } from '../../context/LoaderContext'

const CRUDProduct = () => {
  // const products=useRef([])
  const [products,setProducts]=useState([])
  const [pages,setPage]=useState(1)
  const [positionPage,setPositionPage]=useState(1)
  const lsName = "products";
  const { action } = useParams();
  const { id } = useParams();
 
  const {toogleLoader} = useContext(LoaderContext)
  const history=useNavigate()
  const {showToast}=useContext(AlertContext)
  const {removeUser}=useContext(UserContext)

  useEffect(()=>{
    if ( action == undefined ){
      toogleLoader()
      async function getProducts(){
        let paramGET = {}
        paramGET.page = positionPage
        const response=await getAllProductByUser(history,showToast,removeUser, paramGET)
        toogleLoader()
        setProducts(response.results )
        setPage( response.pagination.totalPages )
      }
      getProducts()
    }
  },[positionPage])

  return (
    <div className="bodyWroduct">
      {
        action == undefined 
        ? <ListProduct data={products} totalPage={pages} positionPage={positionPage} setPositionPage={setPositionPage}  /> 
        : <UpdateProduct id={parseInt( id || 0 )} />
      }
    </div>
  )
}

export default CRUDProduct
