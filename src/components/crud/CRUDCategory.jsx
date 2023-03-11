import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ListCategory from './ListCategory'
import UpdateCategory from './UpdateCategory'
import { getCategories } from '../../globalServices/categories.service'
import { CategoryModel } from '../../model/CategoryModel'
import CreateCategory from './CreateCategory'
import { AlertContext } from '../../context/AlertContext'
import { UserContext } from '../../context/UserContext'
const CRUDCategory = () => {
  const { action } = useParams()
  const { id } = useParams()
  const newForm = { id : 0, name : "", favorite: 0 };
  
  return (
    <div className="bodyWroduct">
      {/* {component} */}
      {
        action === "update" && parseInt( id || 0 ) && <UpdateCategory data={data} id={parseInt( id || 0 )} />
      }
      {
        action === "create" ? <CreateCategory data={ newForm } />
        : <ListCategory /> 
      }

    </div>
  )
}

export default CRUDCategory
