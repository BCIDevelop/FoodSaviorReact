import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ListProduct from './ListProduct'
import UpdateProduct from './UpdateProduct'
import { ProductModel } from '../../model/ProductModel'
import CreateProduct from './CreateProduct'

const CRUDProduct = () => {
  const { action } = useParams();
  const { id } = useParams();
  
  if( localStorage.getItem('products') === null){ localStorage.setItem( 'products', JSON.stringify(ProductModel()) );}
  const data = JSON.parse(localStorage.getItem('products'));
  let component = null;
  if ( action === "update" && parseInt( id || 0 ) ){
    component = <UpdateProduct data={data} id={parseInt( id || 0 )} />
  }else if ( action === "create" ){ 
    const newForm = {
      id : 0,
      product
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
