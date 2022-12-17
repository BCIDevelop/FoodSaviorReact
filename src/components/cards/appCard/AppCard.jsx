import React from 'react'
import './appCard.css'
const AppCard = () => {
  return (
    <div className='pricingCard'>
       <h3>PRO</h3>
       <p>Funcionalidades esencial para profesionalizar su negocio</p>
       <div className='pricingBox'>
          <h2 className='priceTitle'>US$5.99</h2>
          <div className='perTime'>/mes</div>

       </div>
       <button className='btnChoose'>ELEGIR</button>
       <h4 className='footerCard'>Control de inventarios</h4>
       <h4 >Gestion de inventarios</h4>
       <h4  >Control de inventarios</h4>
    </div>
  )
}

export default AppCard
