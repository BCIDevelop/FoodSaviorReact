import React,{useEffect} from 'react'
import './elementCard.css'
import defaultImage from '../../../../assets/defaultImage.png'
const ElementCard = () => {

  useEffect(()=>{
    document.querySelector('.element-category-container').classList.add('element-mounted')
  },[])

  return (
    <ul className='element-category-container'>
    <li className="products-detalle">
      <img className="img-product-alerta" src={defaultImage} alt=""/>
      <ul className="products-datos">
        <li>Leche</li>
        <li>Vence: 7 días</li>
      </ul>
    </li>
    <li className="products-detalle">
      <img className="img-product-alerta" src={defaultImage} alt=""/>
      <ul className="products-datos">
        <li>Leche</li>
        <li>Vence: 7 días</li>
      </ul>
    </li>
    
   
 
  </ul>

  )
}

export default ElementCard
