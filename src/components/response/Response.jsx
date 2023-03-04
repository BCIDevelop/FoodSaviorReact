import React from 'react'
import styles from './response.module.css'
import refrigerator from '../../assets/refrigerator.png'
import errorRefrigerator from '../../assets/errorFoodSavior.webp'
import { Link } from 'react-router-dom'
const Response = ({response}) => {
  const image= response.status===500 ? errorRefrigerator : refrigerator
  return (
    <div className={styles.container}>
     <div className={styles.firstSection}>
            <img className={styles.imageBg} src={image} alt="" />
     </div>
     <div className={styles.secondSection}>
        <h2 className={styles.notFound}>{response.status}</h2>
        <h3 className={styles.textTitle}>{response.message}</h3>
        <p className={styles.paragraph}>Go <Link to='/home'>Home</Link> or contact us at <strong>elitedeveloper1916@gmail.com</strong></p>
     </div >
  
    </div>
  )
}

export default Response
