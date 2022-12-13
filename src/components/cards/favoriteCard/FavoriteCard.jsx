import React from 'react'
import styles from './favoriteCard.module.css'

const FavoriteCard = () => {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardMedia}> 
            <img src="" alt="" />
        </div>
        <div className={styles.cardContent}>
            <h2>Aceite</h2>
            <p>Vence en 110 dias</p>
        </div>
        <div className={styles.cardActions}>
            <input type="checkbox" />
        </div>
    </div>
  )
}

export default FavoriteCard
