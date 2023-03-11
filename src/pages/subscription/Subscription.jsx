import React, { useEffect, useRef, useState } from 'react'
import './subscription.css'
import { getPlansService } from '../../globalServices/subscription.service'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AlertContext } from '../../context/AlertContext'
import { UserContext } from '../../context/UserContext'
import SubscriptionCard from '../../components/cards/subscriptionCard/SubscriptionCard'
import PaymentCard from '../../components/cards/paymentCard/PaymentCard'
import CardPopUp from '../../components/popup/CardPopUp'

const Subscription = () => {

  const [plans,setPlans]=useState([])
  const [paymentCard,setPaymentCard]=useState([])
  const [isPopUpVisible,setIsPopUpVisible]=useState(false)
  const planRef=useRef([])
  const history=useNavigate()
  const {showToast}=useContext(AlertContext)
  const {removeUser}=useContext(UserContext)
  async function getPlans(){
    const records=await getPlansService(history,showToast,removeUser)
    planRef.current=records
    setPlans(records)
  }
  function addCard(){
    setIsPopUpVisible(true)
  }
  function submitCard(event){
    event.preventDefault()
    setIsPopUpVisible(false)
  }
  function changeDetail(period){
    const toogle=document.querySelector('.chip-toggle')
    if (period==='anual'){
        toogle.classList.add('chip-toggle-effect')
        setPlans(prev=>{
           return prev.map(obj=>{
               return {...obj, price:Math.round(obj.price*12 * 100) / 100,status:false}
           })
        })
    }
     else {
       toogle.classList.remove('chip-toggle-effect')
       setPlans(planRef.current)
     }
  }
  
  useEffect(()=>{
    getPlans()

  },[])
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
                            <h4 onClick={()=>changeDetail('month')}>Monthly</h4>

                        </div>
                        <div>
                            <h4 onClick={()=>changeDetail('anual')}>Anually</h4>

                        </div>
                    </div>
                </div>
                { plans.length>0 ? plans.map((element,index)=>(

                    <SubscriptionCard plan={element} key={`plansub${index}`}></SubscriptionCard>
                )): <h4>No se han agregado planes</h4>
 
                }
            </section>
            {/* Section Payment */}
            <section className='subscription-pricing'>
                <div>
                    
                <div className='subscription-section-title'>
                    <h3>Payment</h3>
                    <div className='subscription-chips'>
                        <div className='chip-toggle'></div>
                        <div>
                            <h4 >Card</h4>

                        </div>
                        <div>
                            <h4 > Paypal</h4>

                        </div>
                    </div>
                </div>
                
                { paymentCard.length>0 ? paymentCard.map((element,index)=>(
                        <PaymentCard></PaymentCard>
                    )): <h4>No se encontro tarjeta</h4>

                }
                
                <div className='card-price-button-container'>
                    <button onClick={addCard}> <span>+</span> Add New</button>
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
         { isPopUpVisible && <CardPopUp submitCard={submitCard}></CardPopUp> } 
    
    </div>
  )
}

export default Subscription
