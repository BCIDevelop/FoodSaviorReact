import React,{useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {UserContext} from "../../context/UserContext"
import { useParams } from 'react-router-dom'
import { useRef } from 'react'
import ListProduct from './ListProduct'
import UpdateProduct from './UpdateProduct'
import { ProductModel } from '../../model/ProductModel'
import CreateProduct from './CreateProduct'
import { getAllProductByUser } from '../../globalServices/products.service'
import { AlertContext } from '../../context/AlertContext'
import { LoaderContext } from '../../context/LoaderContext'

const CRUDProduct = () => {
  // const products=useRef([])
  // const [products,setProducts]=useState([])
  // const [pages,setPage]=useState(1)
  // const [positionPage,setPositionPage]=useState(1)
  const lsName = "products";
  const { action } = useParams();
  const { id } = useParams();
 
  const {toogleLoader} = useContext(LoaderContext)
  const history=useNavigate()
  const {showToast}=useContext(AlertContext)
  const {removeUser}=useContext(UserContext)
  

  return (
    <div className="bodyWroduct">
      {
        action == undefined 
        ? <ListProduct  /> 
        : <UpdateProduct id={parseInt( id || 0 )} />
      }
    </div>
  )
}

export default CRUDProduct
