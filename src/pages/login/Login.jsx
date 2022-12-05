import React, { useEffect, useState,useContext } from 'react'
import styles from './login.module.css'
import background from '../../assets/backGround.svg'
import { SessionInit } from '../../utils/sessionInit'
import ConnectedForm from '../../components/form/ConnectedForm'
import { Link} from 'react-router-dom'
import SocialButtons from '../../components/social-button-user/SocialButtons'

const Login = () => {
  useEffect(()=>{
    SessionInit('login')
  },[])

  return (
    <div className={styles.body}>
    <div className={styles.container}>
    <div className={styles.layoutContainer}>
    <div className={styles.formWrapper}>
             <ConnectedForm location='login'></ConnectedForm>
            <div className={styles.line}>
                <span>or</span>
            </div>
            <SocialButtons></SocialButtons>
    </div>
    <div className={styles.panelLayout}>
        <div className={styles.panel}>
            <div className={styles.panelImage}>
                <img src={background} alt=""/>
            </div>
            <div className={styles.textContainer}>
                <h3>New Here?</h3>
                <Link to='/register'>Sign Up <strong>here!</strong></Link>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
  )
}
export default Login