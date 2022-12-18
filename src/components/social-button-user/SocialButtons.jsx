import React,{useContext} from 'react'
import faceLogo from '../../assets/facebook-svgrepo-com.svg'
import styles from './social.module.css'
import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import {UserContext} from '../../context/UserContext'

const SocialButtons = () => {
  
  const {storeUser}=useContext(UserContext)
  const history = useNavigate()
  function facebookClicked(){
    FB.login(function(response) {
        console.log(response)
        if (response.status === 'connected') {
          // Logged into your webpage and Facebook.
           const socialUser=getFacebook()
           const users=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')): []
          console.log(users.some((element)=>{element.mail===socialUser.username}))
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

        } else {
          // The person is not logged into your webpage or we are unable to tell. 
        }
      },{scope: 'public_profile,email'});
    }

      function getFacebook(){
        FB.api('/me?fields=picture,name,email', function(response) {
            console.log(response)
            const socialUser= {name:response.name,mail:response.email,picture:response.picture.data.url}
            return socialUser
        })
    }    
 
  function loginGmail(response){
    console.log(response)
      const decoded_jwt=jwtJsDecode.jwtDecode(response.credential)
      const socialUser={name:decoded_jwt.payload.name,mail:decoded_jwt.payload.email,picture:decoded_jwt.payload.picture}
      const users=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')): []
      console.log(users.some((element)=>{element.mail===socialUser.username}))
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
