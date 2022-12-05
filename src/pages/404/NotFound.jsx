import React from 'react'
import styles from './notFound.module.css'
import refrigerator from '../../assets/refrigerator.png'
const NotFound = () => {
  return (
    <div className={styles.container}>
     <div className={styles.firstSection}>
            <img className={styles.imageBg} src={refrigerator} alt="" />
     </div>
     <div className={styles.secondSection}>
        <h2 className={styles.notFound}>404</h2>
        <h3 className={styles.textTitle}>Not what you're looking for</h3>
        <p className={styles.paragraph}>Go Home or contact us at <strong>developer1916@gmail.com</strong></p>
     </div >
  
    </div>
  )
}

export default NotFound
