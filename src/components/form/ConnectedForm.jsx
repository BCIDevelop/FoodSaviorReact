import React from 'react'
import Form from './Form'
import { invalidEffect } from '../../utils/sessionInit'
const ConnectedForm = ({location}) => {

  function handleSubmitLogin(){
     const errorMessage=document.querySelector('.error-message-toast')
        let invalid=false
        e.preventDefault()
        for(i=0;i<e.nativeEvent.srcElement.children.length-1;i++){  
           if( !e.nativeEvent.srcElement[i].validity.valid){
             invalidEffect(i)
           }
        }
        if(!invalid){
            const inputs=document.querySelectorAll('.input')
            const userData=[]
            
            inputs.forEach((element)=>{
                userData.push(element.value)
            })
            const userArray=JSON.parse(localStorage.getItem('users'))
            const validar=userArray.find(element=> element.mail=== userData[0])
            if(validar===undefined){
                errorMessage.textContent="User doesn't exist"
               // toast.style.display='block'
            } else{
                if(validar.password===userData[1])   {
                    sessionStorage.setItem('user',JSON.stringify(validar))
                    //window.location='/index'
                } 
                else {
                    errorMessage.textContent='Password doesnt match'
                    //toast.style.display='block'
                }
             
            }
        } 
  }
  function handleSubmitRegister(){
    const users=[]
    const errorMessage=document.querySelector('.error-message-toast')
    let invalid=false
    e.preventDefault()
    for(i=0;i<e.nativeEvent.srcElement.children.length-1;i++){  
       if( !e.nativeEvent.srcElement[i].validity.valid){
        invalid=true
         invalidEffect(i)
       }
    }
    if(!invalid){
        const inputs=document.querySelectorAll('.input')
        const userData=[]
        inputs.forEach((element)=>{
            userData.push(element.value)
        })
        users.push({name:userData[0],mail:userData[1],password:userData[2],picture:''})
        
        localStorage.setItem('users',JSON.stringify(users))
    }
}
  

  if(location ==='login') return <Form onSubmit={handleSubmitLogin} location='login' ></Form>
  return <Form location='register' onSubmit={handleSubmitRegister}></Form>
}

export default ConnectedForm
