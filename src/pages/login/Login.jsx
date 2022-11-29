import React, { useEffect } from 'react'
import './login.css'
import faceLogo from '../../assets/facebook-svgrepo-com.svg'
import background from '../../assets/backGround.svg'
import { facebookClicked,loginGmail } from '../../utils/socialButtons'
import { SessionInit } from '../../utils/sessionInit'
import ConnectedForm from '../../components/form/ConnectedForm'
import { Navigate } from 'react-router-dom'

const Login = () => {
  let toastDisplay=true 
  function closeToast(){

  }
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

  useEffect(()=>{
    SessionInit('login')
  },[])


  return (
    
    <div className="container">
    <div className="wrapper">
        <div className="toast error">
            <div className="container-1">
                <i className="fas fa-times-circle"></i>
            </div>
            <div className="container-2">
                <p>Error</p>
                <p className="error-message-toast">Usuario no encontrado</p>
            </div>
            <button onClick={closeToast()}> &times;</button>
        </div>
    </div>
    <div className="layout-container">
    <div className="form-wrapper">
             <ConnectedForm></ConnectedForm>
            <div className="line">
                <span>or</span>
            </div>
            <div className="social-container">
                <div className="social-element">
                    <img onClick={facebookClicked()} src={faceLogo} alt=""/>
                </div>
                <div id='gmail-button' className="social-element">
              
                </div>
            </div>

    </div>
    <div className="panel-layout">

        <div className="panel">
            <div className="panel-image">
                <img src={background} alt=""/>
            </div>
            <div className="text-container">
                <h3>New Here?</h3>
                <a href="../register/register.html">Sign Up <strong>here!</strong></a>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Login
