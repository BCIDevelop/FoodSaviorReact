import React from 'react'
import './elementCard.css'
const ElementCard = () => {
  return (
    <ul>
    <li className="products-detalle">
      <img className="img-product" src="./static/img/categories.jpg" alt=""/>
      <ul className="products-datos">
        <li>Leche</li>
        <li>Vence: 7 días</li>
      </ul>
    </li>
 
  </ul>

  )
}

export default ElementCard
