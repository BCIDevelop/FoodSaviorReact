import React,{useEffect,useRef,useContext, useState} from 'react'
import './elementCard.css'
import { AlertContext } from '../../../../context/AlertContext'
import { useNavigate } from 'react-router-dom'
import defaultImage from '../../../../assets/defaultImage.png'
import { remainingDate } from '../../../../utils/handlerDate'
import { UserContext } from '../../../../context/UserContext'
import { getCategoryId } from '../../../../utils/handlerAssets'
import { getProductsByCategoryService } from '../../../../globalServices/products.service'
const ElementCard = ({index,categoryName}) => {
    const {user,removeUser} = useContext(UserContext)
    const history=useNavigate()
    const {showToast}=useContext(AlertContext)
    const [elementProduct,setElementProduct]=useState([])
    
   async function getProductByCategory(categoryId){
      const results=await getProductsByCategoryService(history,showToast,removeUser,categoryId,3)
      console.log(results)
      setElementProduct(results)
   }
  useEffect(()=>{
    document.querySelector(`.element${index}`).classList.add('element-mounted')
    getProductByCategory(getCategoryId(categoryName))
    
  },[])

  return (
    <ul className={`element-category-container element${index}`}>
  
    {elementProduct.length>0 ? elementProduct.map((element , index)=>(
       
        <li key={`element${index}`} className="products-detalle">
        <img className="img-product-alerta" src={element.image} alt=""/>
        <ul className="products-datos">
          <li>{element.name}</li>
          {remainingDate(element.spoilDate)>0 ? (<li>{`Vence en ${remainingDate(element.spoilDate)} dias`}</li>) 
          : (<li className='spoiled-product'>{`Vencio hace ${Math.abs(remainingDate(element.spoilDate))} dias`}</li>) }
          
        </ul>
      </li>
    )) : (
       <li className="products-detalle">
        <img className="img-product-alerta" src={defaultImage} alt=""/>
        <ul className="products-datos">
         
          <li>No se registran productos en esta categoria</li>
        </ul>
       </li>

    ) 
    
    
    }
 
  </ul>

  )
}

export default ElementCard
