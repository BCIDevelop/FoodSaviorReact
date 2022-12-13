import React,{useState} from 'react'
import styles from './favorites.module.css'
import Filter from '../../components/filter/Filter'
import FavoriteCard from '../../components/cards/favoriteCard/FavoriteCard'
const Favorites = () => {
   const [favorites,setFavorites]=useState([{},{},{}])
  return (
    <div className={styles.container}>
     <Filter></Filter>
     {favorites.length ? favorites.map((element,index)=>(
        <FavoriteCard key={`favorites${index}`}></FavoriteCard>
     )): 
     <div>
       <h3>No se registran productos favoritos</h3>
     </div>
     
     }
    </div>
  )
}

export default Favorites
