import React from 'react'
import { facebookClicked,loginGmail } from '../../utils/socialButtons'
import faceLogo from '../../assets/facebook-svgrepo-com.svg'
import styles from './social.module.css'
const SocialButtons = () => {
    window.onload = function () {
        google.accounts.id.initialize({
          client_id: "867773923360-1o9vafk85bmvsnh2oeebjg7v7ks73us9.apps.googleusercontent.com",
          callback: loginGmail
        });
       
        google.accounts.id.renderButton(
          document.getElementById("gmail-button"),
          { theme: "filled_blue", size: "large",type:"icon",shape:"circle" }  // customization attributes
        );
      }
    
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
