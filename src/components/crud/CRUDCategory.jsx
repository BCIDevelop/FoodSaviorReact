import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ListCategory from './ListCategory'
import UpdateCategory from './UpdateCategory'
import { CategoryModel } from '../../model/CategoryModel'
import CreateCategory from './CreateCategory'

const CRUDCategory = () => {
  const { action } = useParams();
  const { id } = useParams();
  if( localStorage.getItem('categories') === null){ localStorage.setItem( 'categories', JSON.stringify(CategoryModel()) );}
  const data = JSON.parse(localStorage.getItem('categories'));
  let component = null;
  if ( action === "update" && parseInt( id || 0 ) ){
    component = <UpdateCategory data={data} id={parseInt( id || 0 )} />
  }else if ( action === "create" ){ 
    const newForm = {
      id : 0,
      name : "",
      favorite: 0,
    };
    component = <CreateCategory data={newForm} />
  }else{
    component = <ListCategory data={data} /> 
  }

  return (
    <div className="bodyWroduct">
      {component}
    </div>
  )
}

export default CRUDCategory
