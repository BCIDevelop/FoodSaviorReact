import React, { useState } from 'react'

const SubscriptionCard = ({plan}) => {
    const [detail,setDetail]= useState({plan})
  return (
    <div className='subscription-plan-card'>
    <div className='card-plan-name'>
        <input type="radio" name="" id="" />
        <div>
            <h4>{plan.name}</h4>
            <h6>for Individuals</h6>    
        </div>
    </div>
    <div>
        <h4>{`S/ ${plan.price}`}</h4>
        <h6 className='period-subscription'>{plan.status? 'Month ': 'Year'}</h6>
    </div>
</div>
  )
}

export default SubscriptionCard
