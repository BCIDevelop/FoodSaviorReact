import React, { useState } from 'react'
import style from './product.module.css'
import bannerImage from './../../img/product-banner.png'
import { useParams } from 'react-router-dom'
import Products from './Products'
import UpdateProduct from './UpdateProduct'
import { ProductModel } from '../../model/ProductModel'
import CreateProduct from './CreateProduct'

const CRUDProduct = () => {
  const { action } = useParams();
  const { id } = useParams();
  
  if( localStorage.getItem('product') === null){ localStorage.setItem( 'product', JSON.stringify(ProductModel()) );}
  const data = JSON.parse(localStorage.getItem('product'));
  let component = null;
  if ( action === "update" && parseInt( id || 0 ) ){
    component = <UpdateProduct data={data} id={parseInt( id || 0 )} />
  }else if ( action === "create" ){ 
    const newForm = {
      id : null,
      name : "",
      src : "",
      alt : "",
      spoilDate : new Date("2022-12-18 GMT-0500"),
      category : 0,
    };
    component = <CreateProduct data={newForm} />
  }else{
    component = <Products data={data} /> 
  }

  return (
    <div className="bodyWroduct">
      {component}
    </div>
  )
}

export default CRUDProduct
