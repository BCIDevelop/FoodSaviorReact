import React, { useEffect, useState } from 'react'
import './profile.css'
import image from '../../assets/logo.svg'
import Form  from '../../components/form/Form'
import { getUserProfileService } from '../../globalServices/profile.service'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AlertContext } from '../../context/AlertContext'
import { UserContext } from '../../context/UserContext'



const Profile = () => {
  const history=useNavigate()
  const {showToast}=useContext(AlertContext)
  const {removeUser}=useContext(UserContext)


  const [isEdit,setIsEdit] = useState(false)
  const [user,setUser] = useState({})

  function editProfile(e){
    e.preventDefault()
    setIsEdit(true)
  }

  async function getUserProfile(){
    const response = await getUserProfileService(history,showToast,removeUser)
    console.log(response)
    setUser(response)

  }

  useEffect(()=>{getUserProfile()}

  ,[])

  function submitProfile(e){
    e.preventDefault()    
  }

  return (
    <div className='form-profile'>
      <h3>View Profile</h3>
      <img className='profile-avatar' src={image} alt="" />
      <div>
      {!isEdit?
      <Form onSubmit={editProfile} inputs={['Name','Last Name','Username','Email']} disabledForm={true} buttonText='Edit' height='410px' values={Object.values()}></Form>:
      <Form onSubmit={submitProfile} inputs={['Name','Last Name','Username','Password','Confirrm Password']} disabledForm={false} buttonText='Update' height='410px'></Form>
      }
      </div>
    </div>
  )
}

export default Profile
