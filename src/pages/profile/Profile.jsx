import React, { useEffect, useState,useRef } from 'react'
import './profile.css'
import image from '../../assets/logo.svg'
import Form  from '../../components/form/Form'
import { getUserProfileService,updateProfileService } from '../../globalServices/profile.service'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AlertContext } from '../../context/AlertContext'
import { UserContext } from '../../context/UserContext'



const Profile = () => {
  const history=useNavigate()
  const {showToast}=useContext(AlertContext)
  const {removeUser}=useContext(UserContext)
  const userFetched=useRef({})

  const [isEdit,setIsEdit] = useState(false)
  const [user,setUser] = useState({})

  function editProfile(e){
    e.preventDefault()
    setIsEdit(true)
  }
  
  async function getUserProfile(){
    const response = await getUserProfileService(history,showToast,removeUser)
    userFetched.current=response
    setUser(response)
  }

  useEffect(()=>{
    getUserProfile()
    
  }

  ,[])

  async function submitProfile(e){
    e.preventDefault()
    const inputs=document.querySelectorAll('.input')
    const avatar=document.querySelector('.image-avatar-profile')
    const labels=document.querySelectorAll('label')
    const formData=new FormData()
    inputs.forEach((element,index)=>{
      
      let key=labels[index].textContent.toLowerCase()
      if (key==='last name') key="last_name"
      if (key==="confirm password") key="confirm_password"
      formData.append(key,element.value)
    })  
    formData.append('avatar',avatar.files[0])
    await updateProfileService(history,showToast,removeUser,formData)
    

  }
  function openFile(){
    
    const file=document.querySelector('.image-avatar-profile')
    const image=document.querySelector('.profile-avatar')
    file.addEventListener('change',()=>{
      image.src=URL.createObjectURL(file.files[0])
    })
    file.click()
    
    
  }
  return (
    <div className='form-profile'>
      <h3>View Profile</h3>
      <figure className='image-container-profile'>
        <img className='profile-avatar' src={user.avatar} alt="" />
        <i onClick={()=>openFile()} className="fa-solid fa-pencil"></i>
      </figure>
      <div>
       <input className='image-avatar-profile' type='file'></input>
      {!isEdit?
      <Form onSubmit={editProfile} inputs={['Name','Last Name','Username','Email']} disabledForm={true} buttonText='Edit' height='410px' values={user}></Form>:
      <Form onSubmit={submitProfile} inputs={['Name','Last Name','Username','Password','Confirm Password']} disabledForm={false} buttonText='Update' height='410px' values={userFetched.current}></Form>
      }
      </div>
    </div>
  )
}

export default Profile
