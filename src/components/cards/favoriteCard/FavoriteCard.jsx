import React from 'react'
import styles from './favoriteCard.module.css'
import { remainingDate } from '../../../utils/handlerDate'
import defaultImage from '../../../assets/defaultImage.png'
const FavoriteCard = ({favorite}) => {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardMedia}> 
            <img className={styles.cardImage} src={favorite.product.image} alt="" />
        </div>
        <div className={styles.cardContent}>
            <h3 className={styles.subtitle}>{favorite.product.name}</h3>
            
            {remainingDate(favorite.product.spoilDate)>0 ? (<p>{`Vence en ${remainingDate(favorite.product.spoilDate)} dias`}</p>) 
          : (<p className={styles.spoiledProduct}>{`Vencio hace ${Math.abs(remainingDate(favorite.product.spoilDate))} dias`}</p>) }
          
        </div>
        <div className={styles.cardActions}>
            <input type="checkbox" />
        </div>
    </div>
  )
}

export default FavoriteCard
