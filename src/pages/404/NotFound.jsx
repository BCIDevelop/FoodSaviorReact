import React from 'react'
import styles from './notFound.module.css'
import refrigerator from '../../assets/refrigerator.jpg'
const NotFound = () => {
  return (
    <div className={styles.container}>
     <div className={styles.firstSection}>
            <img className={styles.imageBg} src={refrigerator} alt="" />
     </div>
   {/*  <div className={styles.secondSection}>
      <h1>404</h1>
    </div> */}
    </div>
  )
}

export default NotFound
