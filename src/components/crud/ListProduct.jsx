import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './product.module.css'
import Product from './Product'

const ListProduct = ( {data} ) => {
  const [href_create_product, asd ] = useState("./create" )
  return (
    <div className={style.bodyProduct}>
      <h3 className={style.titleh3}>Mis Productos</h3>
      <div className={style.contentFormProduct}>
        <ul>
          {
            data.map( el => 
              <Product key={el.id} item={el} /> 
            )
          }
        </ul>
        <Link to={href_create_product}  className={style.activity_action}>
          <button><i className='fa-solid fa-plus'></i></button>
        </Link>
      </div>
    </div>
  )
}

export default ListProduct