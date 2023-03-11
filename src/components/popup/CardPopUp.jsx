import React, { useEffect } from 'react'
import  { initMercadoPago,CardPayment } from '@mercadopago/sdk-react';
import { useNavigate } from 'react-router-dom';
initMercadoPago('TEST-faa3a649-9f70-43b6-bdca-d9f552a53fd1');
import { useContext } from 'react'
import { AlertContext } from '../../context/AlertContext'
import { UserContext } from '../../context/UserContext'
const CardPopUp = ({submitCard}) => {
  const history=useNavigate()
  const {showToast}=useContext(AlertContext)
  const {removeUser}=useContext(UserContext)

  return (
    <div className='card-form-subscription-popup'>
     <CardPayment initialization={{ amount: 100 }} onReady={()=>{
       const form =document.querySelectorAll('.loading-3K62dT')
       form[1].remove()
       
     }} onSubmit={(cardFor)=>{
      console.log("entro")
      return new Promise((resolve, reject) => {
        fetch("/process_payment", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cardFormData)
        })
        .then((response) => {
            // recibir el resultado del pago
            resolve();
        })
        .catch((error) => {
            // tratar respuesta de error al intentar crear el pago
            reject();
        })
      });
     }} />;
</div>       
  )
}

export default CardPopUp
