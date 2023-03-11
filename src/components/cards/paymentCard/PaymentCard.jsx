import React from 'react'
import cardImage from '../../../assets/visa.png'

const PaymentCard = ({card}) => {
  
  return (
    <div className='subscription-plan-card'>
                    <div className='card-plan-name'>
                        <input type="radio" name="" id="" />
                        <div>
                            <h4>**** 4857</h4>
                            <section className='card-price-option'>
                                <h6> Visa</h6>
                                <button>Edit</button>
                            </section> 
                        </div>
                    </div>
                    <figure>
                        <img className='subscription-image-card' src={cardImage} alt="Credit card" />
                    </figure>
                </div>  
  )
}

export default PaymentCard
