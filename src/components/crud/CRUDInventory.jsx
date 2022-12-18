import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ListInventory from './ListInventory'
import UpdateInventory from './UpdateInventory'
import { KardexModel } from '../../model/KardexModel'
import CreateInventory from './CreateInventory'

const CRUDInventory = () => {
  const lsName = "kardex";
  const { action } = useParams();
  const { id } = useParams();
  
  if( localStorage.getItem(lsName) === null){ localStorage.setItem( lsName, JSON.stringify(KardexModel()) );}
  const data = JSON.parse(localStorage.getItem(lsName));
  let component = null;
  if ( action === "update" && parseInt( id || 0 ) ){
    component = <UpdateInventory data={data} id={parseInt( id || 0 )} />
  }else if ( action === "create" ){ 
    const newForm = {
      id : 0,
      product : 0,
      qty : 0,
      identify : "",
    };
    component = <CreateInventory data={newForm} />
  }else{
    component = <ListInventory data={data} /> 
  }

  return (
    <div className="bodyWroduct">
      {component}
    </div>
  )
}

export default CRUDInventory
