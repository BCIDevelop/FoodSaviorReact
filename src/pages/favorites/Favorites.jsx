import React,{useState,useEffect,useContext} from 'react'
import styles from './favorites.module.css'
import Filter from '../../components/filter/Filter'
import FavoriteCard from '../../components/cards/favoriteCard/FavoriteCard'
import { handlerByUser,joinTableProduct ,getCategoryId} from '../../utils/handlerAssets'
import { UserContext } from '../../context/UserContext'
import { AlertContext } from '../../context/AlertContext'
import { useRef } from 'react'

const Favorites = () => {
    const favoritos=useRef([])
    const {user}=useContext(UserContext)
    const {showToast}=useContext(AlertContext)
   const [favorites,setFavorites]=useState([])
  useEffect(()=>{
    const favoritesByUser=joinTableProduct(JSON.parse(localStorage.getItem('products') || "[]"),handlerByUser(JSON.parse(localStorage.getItem('favorites')),user.mail))
    favoritos.current=favoritesByUser
    setFavorites(favoritesByUser)
  },[])
  function chipSelected(chipName,state,mode){
    if(state===true) {
      if(mode==='reset'){ 
          setFavorites(prev=> favoritos.current.filter(element=>element.category===getCategoryId(chipName)))
      }
      else setFavorites(prev=> prev.filter(element=>element.category===getCategoryId(chipName)))
    }
    else setFavorites(favoritos.current)

  }

  function handleSubmitFavorite(e){
      e.preventDefault()
      const chekedElements=[]
      for(i=0;i<e.nativeEvent.target.length-1;i++){  
        if(e.nativeEvent.target[i].checked)  chekedElements.push(favorites[i])
     }
     console.log(chekedElements)

     if(chekedElements.length>0){
      favoritos.current=favoritos.current.filter(element=>  !chekedElements.some(item=>item.id===element.id))
      setFavorites(prev=>prev.filter(element=> !chekedElements.some(item=> item.id === element.id)))
      localStorage.setItem('favorites',JSON.stringify(JSON.parse(localStorage.getItem('favorites')).filter(element=>!chekedElements.some(item=> item.id===element.productId))))
     }
     else showToast('Por favor, selecciona un elemento','Error')
      
  }

  return (
    <div className={styles.container}>
     <Filter chipSelected={chipSelected}></Filter>
     <form onSubmit={(e)=>handleSubmitFavorite(e)} action="">

     <div className={styles.favoriteContainer}>
      
     {favorites.length>0 ? favorites.map((element,index)=>(
       <FavoriteCard key={`favorites${index}`} favorite={element}></FavoriteCard>
       )): 
       <div>
       <h3>No se registran productos favoritos</h3>
     </div>
     
    }
    </div>
    <div className={styles.buttonSubmitContainer}>
      <button type='submit' className={styles.buttonSubmit}>RETIRAR</button>
    </div>
    </form>
    </div>
  )
}

export default Favorites
