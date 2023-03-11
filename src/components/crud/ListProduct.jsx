import React, { useState,useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import style from './product.module.css'
import Product from './Product'
import { getAllProductByUser } from '../../globalServices/products.service'
import { AlertContext } from '../../context/AlertContext'
import {UserContext} from "../../context/UserContext"

const ListProduct = (  ) => {
  
  const [range, setRange] = useState( [] );
  const [products,setProducts]=useState([])
  const [href_create_product, asd ] = useState("./create" )
  const [positionPage,setPositionPage]=useState(1)
  const [totalPage,setTotalPage]=useState(1)
  
  const history=useNavigate()
  const {showToast}=useContext(AlertContext)
  const {removeUser}=useContext(UserContext)

  useEffect(() => {
    async function getProducts(){
      let paramGET = {}
      paramGET.page = positionPage
      const response=await getAllProductByUser(history,showToast,removeUser, paramGET)
      setProducts(response.results )
      setTotalPage( response.pagination.totalPages )
      let tmp = []
      for (let i = 1; i <= response.pagination.totalPages; i++) {
        tmp.push(i);
      }
      setRange( tmp )
    }
    getProducts()
  }, [positionPage])
  



  return (
    <div className={style.bodyProduct}>
      <h3 className={style.titleh3}>Mis Productos</h3>
      <div className={style.contentFormProduct}>
        <div className={style.contentLink}>
            <Link to={href_create_product} className={style.returnA}>
                <i className="fa-solid fa-plus"></i> Añadir
            </Link>
        </div>
        <ul>
          {
            products.map( el => 
              <Product key={el.id} item={el} /> 
            )
          }
        </ul>
      </div>
      <div className={style.contentFormProduct}>
        <ul className={style.contentPage}>
          {
            range.map( el => 
              <li 
                key={el} 
                data-status={positionPage == el ? 'active' : 'disabled'}
                onClick={() => (
                  setPositionPage(el)
              )} >{el}</li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default ListProduct