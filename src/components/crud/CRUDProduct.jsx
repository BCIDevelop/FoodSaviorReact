import React from 'react'

import { useParams } from 'react-router-dom'
import ListProduct from './ListProduct'
import UpdateProduct from './UpdateProduct'


const CRUDProduct = () => {
  // const products=useRef([])
  // const [products,setProducts]=useState([])
  // const [pages,setPage]=useState(1)
  // const [positionPage,setPositionPage]=useState(1)
  const lsName = "products";
  const { action } = useParams();
  const { id } = useParams();
 


  return (
    <div className="bodyWroduct">
      {
        action == undefined 
        ? <ListProduct  /> 
        : <UpdateProduct id={parseInt( id || 0 )} />
      }
    </div>
  )
}

export default CRUDProduct
