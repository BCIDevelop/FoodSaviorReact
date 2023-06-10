import React,{useContext} from 'react'
import faceLogo from '../../assets/facebook-svgrepo-com.svg'
import styles from './social.module.css'
import { useEffect,useRef } from 'react'
import { useNavigate} from 'react-router-dom'
import {UserContext} from '../../context/UserContext'
import { AlertContext } from '../../context/AlertContext'
import { fbLoginService } from '../../globalServices/auth.service'
const SocialButtons = () => {
  const {showToast}  = useContext(AlertContext)
  const signalRef = useRef(null)
  const {storeUser,removeUser}=useContext(UserContext)
  const history = useNavigate()
  function facebookClicked(){
    FB.login(function(response) {
        if (response.status === 'connected') {
          // Logged into your webpage and Facebook.
          const access_token=response.authResponse.accessToken
          getFacebook(access_token)   

        } else {
          // The person is not logged into your webpage or we are unable to tell. 
        }
      },{scope: 'public_profile,email'});
    }

      async function getFacebook(access_token){
        
        signalRef.current = new AbortController()
        const response=await fbLoginService(signalRef.current,history,showToast,removeUser,access_token)
        const user={
          access_token:response.access_token,
          refresh_token:response.refresh_token,
        }
        
        storeUser(user)
        history('/home')
    }    
 
    async function loginGmail(response){
        console.log('entro callback gmail')
        signalRef.current = new AbortController()
        const credential=response.credential
        const result=await gmailLoginService(signalRef.current,history,showToast,removeUser,credential)
        /* const user={
          access_token:result.access_token,
          refresh_token:result.refresh_token,
        }
        
        storeUser(user)
        history('/home') */
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
    return ()=>{
   
      if(signalRef.current!==null) signalRef.current.abort()
    }
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
