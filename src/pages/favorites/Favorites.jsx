import React,{useState,useEffect,useContext} from 'react'
import styles from './favorites.module.css'
import Filter from '../../components/filter/Filter'
import FavoriteCard from '../../components/cards/favoriteCard/FavoriteCard'
import { getCategoryId} from '../../utils/handlerAssets'
import { useRef } from 'react'
import { AlertContext } from '../../context/AlertContext'
import {UserContext} from "../../context/UserContext"
import { getFavoritesService ,deleteFavoritesService} from '../../globalServices/favorites.service'
import { useNavigate } from 'react-router-dom'
import { LoaderContext } from '../../context/LoaderContext'
const Favorites = () => {
    const favoritos=useRef([])
    const history=useNavigate()
    const {toogleLoader} = useContext(LoaderContext)
    const {showToast}=useContext(AlertContext)
    const {removeUser}=useContext(UserContext)
    const [favorites,setFavorites]=useState([])
    
    
    async function getFavorites(){
       
        const response=await getFavoritesService(history,showToast,removeUser)
        toogleLoader()
        favoritos.current=response
        setFavorites(response)
    }
    
    useEffect(()=>{
      toogleLoader()
      getFavorites() 
    },[])
  function chipSelected(chipName,state,mode){
    if(state===true) {
   

      if(mode==='reset'){ 
          setFavorites(prev=> favoritos.current.filter(element=>element.product.category.name===chipName))
      }
     
      else  setFavorites(prev=> prev.filter(element=>element.product.category.name===chipName))
    }
    else setFavorites(favoritos.current)

  }

  async function handleSubmitFavorite(e){
      e.preventDefault()
      const chekedElements=[]
      for(i=0;i<e.nativeEvent.target.length-1;i++){  
        if(e.nativeEvent.target[i].checked)  chekedElements.push(favorites[i])
     }
     if(chekedElements.length>0){
      const products=[]
      chekedElements.forEach(element => {
          products.push(element.product.id)
      });
      await deleteFavoritesService(products,history,showToast,removeUser)
      favoritos.current=favoritos.current.filter(element=>  !chekedElements.some(item=>item.id===element.id))
      setFavorites(prev=>prev.filter(element=> !chekedElements.some(item=> item.id === element.id)))

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
