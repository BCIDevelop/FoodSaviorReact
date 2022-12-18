import React,{useContext} from 'react'
import { facebookClicked,loginGmail } from '../../utils/socialButtons'
import faceLogo from '../../assets/facebook-svgrepo-com.svg'
import styles from './social.module.css'
import { useEffect } from 'react'
import {AlertContext} from '../../context/AlertContext'
import { useNavigate} from 'react-router-dom'
import {UserContext} from '../../context/UserContext'

const SocialButtons = () => {
  const {showToast} =useContext(AlertContext)
  const {storeUser}=useContext(UserContext)
  const history = useNavigate()
  function loginGmail(response){
    console.log(response)
      const decoded_jwt=jwtJsDecode.jwtDecode(response.credential)
      const socialUser={name:decoded_jwt.payload.name,username:decoded_jwt.payload.email,picture:decoded_jwt.payload.picture}
      const users=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')): []
      if(users.some((element)=>{element.mail===socialUser.username})) 
      {
            storeUser(socialUser)
      }
      else {
        users.push(socialUser)
        localStorage.setItem('users',JSON.stringify(users))
        storeUser(socialUser)
      }
      history('/home')
    }
   
   useEffect(()=>{
    google.accounts.id.initialize({
          client_id: "867773923360-1o9vafk85bmvsnh2oeebjg7v7ks73us9.apps.googleusercontent.com",
          callback: loginGmail
        });
    google.accounts.id.renderButton(
      document.getElementById("gmail-button"),
      { theme: "filled_blue", size: "large",type:"icon",shape:"circle" }  // customization attributes
    );
   },[]) 

  return (
    <div className={styles.socialContainer}>
                <div className={styles.socialElement}>
                    <img onClick={()=>{facebookClicked()}} src={faceLogo} alt=""/>
                </div>
                <div id='gmail-button' className={styles.socialElement}>
              
                </div>
            </div>

  )
}

export default SocialButtons
