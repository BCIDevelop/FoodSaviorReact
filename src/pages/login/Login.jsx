import React, { useEffect } from 'react'
import styles from './login.module.css'
import background from '../../assets/backGround.svg'
import logo from '../../assets/logo.svg'
import { SessionInit } from '../../utils/sessionInit'
import ConnectedForm from '../../components/form/ConnectedForm'
import { Link,useNavigate} from 'react-router-dom'
import SocialButtons from '../../components/social-button-user/SocialButtons'

const Login = () => {
  const history= useNavigate()
  useEffect(()=>{
    SessionInit('login')
  },[])
  function returnApp(){
      history('/')  
  }
  return (
    <div className={styles.body}>
    <div className={styles.container}>
    <img onClick={returnApp} className={styles.logo} src={logo} alt="logo" />

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
                <img src={background} alt="image-background"/>
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
