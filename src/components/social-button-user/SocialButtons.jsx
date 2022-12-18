import React from 'react'
import { facebookClicked,loginGmail } from '../../utils/socialButtons'
import faceLogo from '../../assets/facebook-svgrepo-com.svg'
import styles from './social.module.css'
import { useEffect } from 'react'
const SocialButtons = () => {
  function loginGmail(response){
    console.log('entro')
    console.log(response)
      const decoded_jwt=jwtJsDecode.jwtDecode(response.credential)
      const socialUser={name:decoded_jwt.payload.name,username:decoded_jwt.payload.email,picture:decoded_jwt.payload.picture}
      return socialUser
    }
    window.onload = function () {
        google.accounts.id.initialize({
          client_id: "867773923360-1o9vafk85bmvsnh2oeebjg7v7ks73us9.apps.googleusercontent.com",
          callback: loginGmail
        });
       
      }
   useEffect(()=>{
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
