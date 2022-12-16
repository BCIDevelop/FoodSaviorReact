import React,{useContext} from 'react'
import Form from './Form'
import { invalidEffect } from '../../utils/sessionInit'
import { useNavigate } from 'react-router-dom'
import { AlertContext } from '../../context/AlertContext'
import { UserContext } from '../../context/UserContext'
const ConnectedForm = ({location}) => {
    function validityPassword(){
        const testPasswordLength=new RegExp( "^(?=.{8,})")
        const testPasswordUpperCase = new RegExp("^(?=.*[A-Z])")
         const password= document.getElementById('password-input').value
        if (!testPasswordLength.test(password)) return {isValid:false,message:'Password must be 8 character long'}
        if (!testPasswordUpperCase.test(password)) return {isValid:false,message:'Password have at least one Uppercase'}
        return {isValid:true,message:''}
    }
    function serverValidation(){
        return JSON.parse(localStorage.getItem('users')).some((element)=>element.mail===document.querySelector('#email-input').value)     
    }
    const history = useNavigate()
    const {showToast}= useContext(AlertContext)
    const {storeUser}=useContext(UserContext)
  function handleSubmitLogin(e){
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
                showToast("User doesn't exist",'Error')
            } else{
                if(validar.password===userData[1])   {
                    storeUser(validar)
                    history('/home')
                } 
                else {
                    showToast('Password doesnt match','Error')
                }
             
            }
        } 
  }
  function handleSubmitRegister(e){
    const userStorage=JSON.parse(localStorage.getItem('users'))
    const users= userStorage ? userStorage : []
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
            if(!serverValidation()) {
            const inputs=document.querySelectorAll('.input')
            const userData=[]
            inputs.forEach((element)=>{
                userData.push(element.value)
            })
            users.push({name:userData[0],mail:userData[1],password:userData[2],picture:''})
            localStorage.setItem('users',JSON.stringify(users))
            showToast('Successful Register','Success')
            history('/login')
            } else showToast('Username already in use, please use another one','Error')
        }
    }
}
  
  if(location ==='login') return <Form onSubmit={handleSubmitLogin} location='login' ></Form>
  return <Form location='register' onSubmit={handleSubmitRegister}></Form>
}

export default ConnectedForm
