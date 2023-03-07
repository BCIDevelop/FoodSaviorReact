import React, { useEffect, useState } from 'react'
import './profile.css'
import image from '../../assets/logo.svg'
import Form  from '../../components/form/Form'


const Profile = () => {
  const [isEdit,setIsEdit] = useState(false)
  
  function editProfile(e){
    e.preventDefault()
    setIsEdit(true)
    
  }

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
