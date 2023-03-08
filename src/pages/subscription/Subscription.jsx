import React from 'react'
import cardImage from '../../assets/visa.png'
import './subscription.css'
import { Link } from 'react-router-dom'
const Subscription = () => {
  return (
    <div className='subscription-container'>
        <h2>Subscription</h2>
        <div className='subscription-section-container'>
            {/* Section Plan */}
            <section className='subscription-plan'>
                <div className='subscription-section-title'>
                    <h3>Select Plan</h3>
                    <div className='subscription-chips'>
                        <div className='chip-toggle'></div>
                        <div>
                            <h4>Monthly</h4>

                        </div>
                        <div>
                            <h4>Anually</h4>

                        </div>
                    </div>
                </div>
                <div className='subscription-plan-card'>
                    <div className='card-plan-name'>
                        <input type="radio" name="" id="" />
                        <div>
                            <h4>Plus</h4>
                            <h6>for Individuals</h6>    
                        </div>
                    </div>
                    <div>
                        <h4>$8.99</h4>
                        <h6>Month</h6>
                    </div>
                </div>
            </section>
            {/* Section Payment */}
            <section className='subscription-pricing'>
                <div>
                    
                <div className='subscription-section-title'>
                    <h3>Payment</h3>
                    <div className='subscription-chips'>
                        <div className='chip-toggle'></div>
                        <div>
                            <h4>Paypal</h4>

                        </div>
                        <div>
                            <h4> Card</h4>

                        </div>
                    </div>
                </div>
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
                <div className='card-price-button-container'>
                    <button> <span>+</span> Add New</button>
                </div>
                </div>
                {/* Discount code */}
                <div className='discount-container'>
                    <div className='discount-text'>

                    <h4>Discount Code</h4>
                    <div className='discount-help'>i</div>
                    </div>
                    <div className='discount-code-container'>
                        <input type="text" />
                        <button>Apply</button>
                    </div>

                </div>
                {/* Price Detail */}
                 <div className='price-detail-container'>
                    {/* Subtotal */}
                    <div className='subtotal-container'>
                        <h5>3 users</h5>
                        <h5>$38.97</h5>
                    </div>
                    {/* Discount */}
                    <div className='subtotal-container'>
                    <h5>Discount (-20%)</h5>
                    <h5>-$7.79</h5>
                    </div>
                    {/* Total */}
                    <div className='total-container'>
                        <div>
                        <h5>Total</h5>
                        <p> Due on 11 February 2022</p>
                        </div>
                        <div className='total-price'>
                        <h5>$</h5>
                        <h6> 31.17</h6>
                        </div>
                    </div>
                    <button>Procced Payment</button>
                    <p>
                        You can check your renewal date or cancel anytime via your
                         <Link to='/profile'>Account Page</Link>
                    </p>
                 </div>
            </section>
        </div>
    </div>
  )
}

export default Subscription
