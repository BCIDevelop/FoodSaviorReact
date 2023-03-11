import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './product.module.css'
import Product from './Product'

const ListProduct = ( {data, totalPage, positionPage, setPositionPage} ) => {
  
  const [href_create_product, asd ] = useState("./create" )
  const range = [];
  let i = 1;
  for (let i = 1; i <= totalPage; i++) {
    range.push(i);
  }

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
            data.map( el => 
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