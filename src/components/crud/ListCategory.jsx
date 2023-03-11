import React, { useState,useEffect,useContext } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { getCategories } from '../../globalServices/categories.service'
import { AlertContext } from '../../context/AlertContext'
import { UserContext } from '../../context/UserContext'
import style from './product.module.css'
import Product from './Product'

const ListCategory = (  ) => {
  const [ data, setData ] = useState( [])
  const history=useNavigate()
  const [href_create_product, asd ] = useState("./create" )
  const {user,removeUser}=useContext(UserContext)
  const {showToast}= useContext(AlertContext)
  const [range, setRange] = useState( [] );
  const [positionPage,setPositionPage]=useState(1)
  const [totalPage,setTotalPage]=useState(1)
  
  async function processGetCategories(){
    const response = await getCategories(history,showToast,removeUser)
    setData( response.results )
    setTotalPage( response.pagination.totalPages )
      let tmp = []
      for (let i = 1; i <= response.pagination.totalPages; i++) {
        tmp.push(i);
      }
      setRange( tmp )
  }
  useEffect(()=>{
      processGetCategories()
      return ;
  },[])

  return (
    <div className={style.bodyProduct}>
      <h3 className={style.titleh3}>Mis Categorias</h3>
      <div className={style.contentFormProduct}>
        <div className={style.contentLink}>
            <Link to={href_create_product} className={style.returnA}>
                <i className="fa-solid fa-plus"></i> Añadir
            </Link>
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
        <ul>
          {
            data.map( el => 
              <Product key={el.id} item={el} /> 
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default ListCategory