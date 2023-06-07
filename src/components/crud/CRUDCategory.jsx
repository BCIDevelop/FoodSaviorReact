import React from 'react'
import { useParams } from 'react-router-dom'
import ListCategory from './ListCategory'
import UpdateCategory from './UpdateCategory'
import CreateCategory from './CreateCategory'
const CRUDCategory = () => {
  const { action } = useParams()
  const { id } = useParams()
  // const newForm = { id : 0, name : "", favorite: 0 };
  
  return (
    <div className="bodyWroduct">
      {/* {component} */}
      {
        action === "update" && parseInt( id || 0 ) ? <UpdateCategory identify={parseInt( id || 0 )} />
        : <>
          {
            action === "create" ? <CreateCategory  />
            : <ListCategory /> 
          }
        </>
      }

    </div>
  )
}

export default CRUDCategory
