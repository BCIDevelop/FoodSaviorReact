import React from 'react'
import './appCard.css'
import { useNavigate} from 'react-router-dom'
const AppCard = ({element}) => {
    const history=useNavigate()
  return (
    <div className='pricingCard'>
       <h3>{element.plan}</h3>
       <p>{element.planText}</p>
       <div className='pricingBox'>
          <h2 className='priceTitle'>{element.price}</h2>
          <div className='perTime'>{`/${element.period}`}</div>

       </div>
       <button className='btnChoose' onClick={()=>history('/login')}>ELEGIR</button>
       <h4 className='footerCard'>{element.footerTitle}</h4>
       <h4 >Gestion de inventarios</h4>
       <h4  >Control de inventarios</h4>
    </div>
  )
}

export default AppCard
