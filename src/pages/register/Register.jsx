import React, { useEffect }  from 'react'
import ConnectedForm from '../../components/form/ConnectedForm'
import SocialButtons from '../../components/social-button-user/SocialButtons'
import { SessionInit } from '../../utils/sessionInit'
import background from '../../assets/backGround.svg'
import styles from '../login/login.module.css'
import { Link } from 'react-router-dom'
const Register = () => {
    useEffect(()=>{
        SessionInit('login')
      },[])
  return (
    <div className={styles.body}>

    <div className={styles.container}>
    <div className={styles.layoutContainer}>
    <div className={styles.formWrapper}>
            <ConnectedForm location='register'></ConnectedForm>
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
                <h3>Do you have an account?</h3>
                <Link to='/login'>Sign In <strong>here!</strong></Link>
            </div>
        </div>
    </div>
</div>
    </div>
</div>
  )
}

export default Register
