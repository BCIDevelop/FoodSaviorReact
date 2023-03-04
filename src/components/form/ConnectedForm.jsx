import React,{useContext} from 'react'
import Form from './Form'
import makeRequest from '../../globalServices/api.service'
import { invalidEffect } from '../../utils/sessionInit'
import { useNavigate } from 'react-router-dom'
import { AlertContext } from '../../context/AlertContext'
import { UserContext } from '../../context/UserContext'
import { LoaderContext } from '../../context/LoaderContext'
import responseHandler from '../../utils/handlerResponse'
const ConnectedForm = ({location}) => {
    function validityPassword(){
        const testPasswordLength=new RegExp( "^(?=.{8,})")
        const testPasswordUpperCase = new RegExp("^(?=.*[A-Z])")
         const password= document.getElementById('password-input').value
        if (!testPasswordLength.test(password)) return {isValid:false,message:'Password must be 8 character long'}
        if (!testPasswordUpperCase.test(password)) return {isValid:false,message:'Password have at least one Uppercase'}
        return {isValid:true,message:''}
    }
  
    const history = useNavigate()
    const {showToast}= useContext(AlertContext)
    const {storeUser}=useContext(UserContext)
    const {toogleLoader}=useContext(LoaderContext)
    async function handleSubmitLogin(e){
        let invalid=false
        e.preventDefault()
        for(i=0;i<e.nativeEvent.srcElement.children.length-1;i++){  
           if( !e.nativeEvent.srcElement[i].validity.valid){
             invalidEffect(i)
           }
        }
        if(!invalid){
            const labels=document.querySelectorAll('label')
            const inputs=document.querySelectorAll('.input')
            const userData={}
            inputs.forEach((element,index)=>{
                const key=labels[index].textContent.toLowerCase()
                userData[key]=element.value
            })
            const response=await makeRequest('auth/signin','POST',userData,false)
            const validated=await responseHandler(response,history,showToast)
            if (validated){
                const user={
                    access_token:response.results.access_token,
                    refresh_token:response.results.refresh_token,
                    email:userData.email
                }
                
                storeUser(user)
                history('/home')
            }
        } 
  }
  async function handleSubmitRegister(e){
    let invalid=false
    e.preventDefault()
    for(i=0;i<e.nativeEvent.srcElement.children.length-1;i++){  
       if( !e.nativeEvent.srcElement[i].validity.valid ){
        invalid=true
         invalidEffect(i)
       }
    }
    if(!invalid){
        const validationPassword=validityPassword()
        if (!validationPassword.isValid) {
            invalidEffect(2,validationPassword.message)
        }
        else{
            toogleLoader()
            const labels=document.querySelectorAll('label')
            const inputs=document.querySelectorAll('.input')
            const userData={}
            inputs.forEach((element,index)=>{
                let key=labels[index].textContent.toLowerCase()
                if (key==='last name') key="last_name"
                userData[key]=element.value
            })  
            const response=await makeRequest('auth/signup','POST',userData,false)
            toogleLoader()
            const validated=responseHandler(response,history,showToast)
            if (validated){
                showToast('Successful Register','Success')
                history('/login')
            }
        }
    }
}
  
  if(location ==='login') return <Form onSubmit={handleSubmitLogin} location='login' ></Form>
  return <Form location='register' onSubmit={handleSubmitRegister}></Form>
}

export default ConnectedForm
