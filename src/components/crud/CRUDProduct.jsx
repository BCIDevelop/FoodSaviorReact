import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ListProduct from './ListProduct'
import UpdateProduct from './UpdateProduct'
import { ProductModel } from '../../model/ProductModel'
import CreateProduct from './CreateProduct'

const CRUDProduct = () => {
  const lsName = "products";
  const { action } = useParams();
  const { id } = useParams();
  
  if( localStorage.getItem(lsName) === null){ localStorage.setItem( lsName, JSON.stringify(ProductModel()) );}
  const data = JSON.parse(localStorage.getItem(lsName));
  let component = null;
  if ( action === "update" && parseInt( id || 0 ) ){
    component = <UpdateProduct data={data} id={parseInt( id || 0 )} />
  }else if ( action === "create" ){ 
    const newForm = {
      id : 0,
      favorite: 0,
      name : "",
      src : "",
      alt: "",
      spoilDate:new Date(),
      unit : "",
      bardcode : "",
      category: 0,
      userId:''
    };
    component = <CreateProduct data={newForm} />
  }else{
    component = <ListProduct data={data} /> 
  }

  return (
    <div className="bodyWroduct">
      {component}
    </div>
  )
}

export default CRUDProduct
