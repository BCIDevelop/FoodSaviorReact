import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './product.module.css'
import Product from './Product'

const ListCategory = ( {data} ) => {
  const [href_create_product, asd ] = useState("./create" )
  return (
    <div className={style.bodyProduct}>
      <h3 className={style.titleh3}>Mis Categorias</h3>
      <div className={style.contentFormProduct}>
        <div className={style.contentLink}>
            <Link to={href_create_product} className={style.returnA}>
                <i className="fa-solid fa-plus"></i> Añadir
            </Link>
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