import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './product.module.css'

const Product = ( {item} ) => {
  const [href_product, asd ] = useState("./update/" + item.id )
  return (
    <li  className={style.ItemCategory}>
      <Link to={href_product} >
        <span><i className="fa-solid fa-list"></i></span>
        <span>{item.name}</span>
        <span><i className="fa-solid fa-arrow-right"></i></span>
      </Link>
    </li>
  )
}

export default Product