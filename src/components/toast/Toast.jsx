import React from 'react'
import styles from './toast.module.css'
import { useEffect,useContext } from 'react'
import { AlertContext } from '../../context/AlertContext'

const Toast = () => {
    const {toast,hideToast}=useContext(AlertContext)
   
   useEffect(()=>{
         const timerId=setTimeout(()=>{
            hideToast()
        },3000) 
        return ()=> clearTimeout(timerId) 
   },[toast]) 
   if (toast.visibility===true){
  return (
    
    <div className={styles.wrapper}>
        <div className={toast.type==='Error'? styles.toastError : styles.toastSuccess}>
            <div className={styles.container1}>
                <i className="fas fa-times-circle"></i>
            </div>
            <div className={styles.container2}>
                <p>{toast.type}</p>
                <p className="error-message-toast">{toast.message}</p>
            </div>
            <button onClick={hideToast}> &times;</button>
            <div className={toast.type==='Error'? styles.animatedLineError:styles.animatedLineSuccess}></div>
        </div>
      
    </div>
  )
} 
 return null
}

export default Toast
