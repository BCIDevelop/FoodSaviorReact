import React, {useEffect, useState,useRef} from 'react'
import './profile.css'
import Form  from '../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AlertContext } from '../../context/AlertContext'
import { UserContext } from '../../context/UserContext'
import { invalidEffect } from '../../utils/sessionInit'
import { deleteUserService } from '../../globalServices/profile.service'
import useFetch from '../../hooks/useFetch'
import { updateProfileService } from '../../globalServices/profile.service'
const Profile = () => {
  const history=useNavigate()
  const {showToast}=useContext(AlertContext)
  const {removeUser}=useContext(UserContext)
  const [{data},makeFetch,setUser]=useFetch({url:'profile/me',method:'GET',body:{},hasCredentials:true,makeRender:true}) 
  const [isEdit,setIsEdit] = useState(false)
  const controllerRef=useRef(null)

  function editProfile(e){
    e.preventDefault()
    setIsEdit(true)
  }
  useEffect(()=>{
   return () => {
    controllerRef.current.abort()
   } 
  },[])
  function validityPassword(){
    const testPasswordLength=new RegExp( "^(?=.{8,})")
    const testPasswordUpperCase = new RegExp("^(?=.*[A-Z])")
     const password= document.getElementById('password-input').value
    if (!testPasswordLength.test(password)) return {isValid:false,message:'Password must be 8 character long'}
    if (!testPasswordUpperCase.test(password)) return {isValid:false,message:'Password have at least one Uppercase'}
    return {isValid:true,message:''}
}
  async function submitProfile(e){
    const password=document.getElementById('password-input').value
    const confirmPassword=document.getElementById('confirm password').value
    e.preventDefault()
    if (password){
        const validationPassword=validityPassword()
          if (!validationPassword.isValid) {
              invalidEffect(3,validationPassword.message)
              return
      }
      else if(password!=confirmPassword){
        invalidEffect(4,"Password doesnt match")
        return
      }
    }
    
   
      const inputs=document.querySelectorAll('.input')
      const avatar=document.querySelector('.image-avatar-profile')
      const labels=document.querySelectorAll('label')
      const formData=new FormData()
      inputs.forEach((element,index)=>{
        
        let key=labels[index].textContent.toLowerCase()
        if (key==='last name') key="last_name"
        if (key==="confirm password") key="confirm_password"
        if (element.value!='') formData.append(key,element.value)
      })  
      formData.append('avatar',avatar.files[0])
      console.log(formData)
      controllerRef.current=new AbortController()
      const signal=controllerRef.current.signal
      await updateProfileService(signal,history,showToast,removeUser,formData)
      showToast('Se actualizo correctamente','Success')
      history('/home')
  
    
    

  }
  function openFile(){
    
    const file=document.querySelector('.image-avatar-profile')
    const image=document.querySelector('.profile-avatar')
    file.addEventListener('change',()=>{
      image.src=URL.createObjectURL(file.files[0])
    })
    file.click()
    
    
  }
  async function deleteAccount(){
    controllerRef.current=new AbortController()
    const signal=controllerRef.current.signal
    await deleteUserService(signal,history,showToast,removeUser)
    removeUser()
    history('/login')
  }
  return (
    <div className='form-profile'>
      <h3>View Profile</h3>
      <figure className='image-container-profile'>
        <img key={data.avatar} className='profile-avatar' src={data.avatar} alt="" />
        <i onClick={()=>openFile()} className="fa-solid fa-pencil"></i>
      </figure>
      <div> 
       <input className='image-avatar-profile' type='file'></input>
      {!isEdit?
      <Form onSubmit={editProfile} inputs={['Name','Last Name','Username','Email']} disabledForm={true} buttonText='Edit' height='410px' values={data}></Form>:
      (
        <>
        <Form onSubmit={submitProfile} inputs={['Name','Last Name','Username','Password','Confirm Password']} disabledForm={false} buttonText='Update' height='410px' values={data}></Form>
        <button onClick={deleteAccount} className='btn-submit delete-account'>Eliminar Cuenta</button>
        </>
      )
      }
      </div>
    </div>
  )
}

export default Profile
