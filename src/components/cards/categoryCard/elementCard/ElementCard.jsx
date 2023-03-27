import React,{useEffect} from 'react'
import './elementCard.css'
import defaultImage from '../../../../assets/defaultImage.png'
import { remainingDate } from '../../../../utils/handlerDate'
import { getCategoryId } from '../../../../utils/handlerAssets'
import useFetch from '../../../../hooks/useFetch'
const ElementCard = ({index,categoryName}) => {
  const perPage=3
  const context=`products/user?page=1&per_page=${perPage}&category_id=${getCategoryId(categoryName)}`
  const [{data},makeFetch,setElement]=useFetch({url:context,method:'GET',body:{},hasCredentials:true,makeRender:true})

  useEffect(()=>{
    document.querySelector(`.element${index}`).classList.add('element-mounted') 
  },[])

  return (
    <ul className={`element-category-container element${index}`}>
  
    {data.length>0 ? data.map((element , index)=>(
       
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
