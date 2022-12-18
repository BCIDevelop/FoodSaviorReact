import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './product.module.css'

const Kardex = ( {item} ) => {
  const [href_Kardex, asd ] = useState("./update/" + item.id )
  const lsName = "products";
  const products = JSON.parse(localStorage.getItem(lsName));
  const [form, instForm] = useState( products.find( function (d) { return d.id === parseInt(item.product || 0); }) ) ;
  
  return (
    <li  className={style.ItemCategory}>
      <Link to={href_Kardex} >
        <span> {item.qty} {form.unit} </span>
        <span> {form.name} </span>
        <span><i className="fa-solid fa-arrow-right"></i></span>
      </Link>
    </li>
  )
}

export default Kardex