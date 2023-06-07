import React,{useContext} from 'react'
import styles from './favorites.module.css'
import Filter from '../../components/filter/Filter'
import FavoriteCard from '../../components/cards/favoriteCard/FavoriteCard'
import { useRef } from 'react'
import { AlertContext } from '../../context/AlertContext'
import { LoaderContext } from '../../context/LoaderContext'
import useFetch from '../../hooks/useFetch'
const Favorites = () => {
    const {toogleLoader} = useContext(LoaderContext)
    const [{data},makeFetch,setFavorites]=useFetch({url:'favorites',method:'GET',body:{},hasCredentials:true,makeRender:true})
    const {showToast}=useContext(AlertContext)
    const favoritos=useRef([])
  function chipSelected(chipName,state,mode){
    if(state===true) {
      if(mode==='reset'){ 
          setFavorites( favoritos.current.filter(element=>element.product.category.name===chipName))
      }
      else  {
        setFavorites(prev=> prev.filter(element=>element.product.category.name===chipName))
        favoritos.current=data
      }
    }
    else setFavorites(favoritos.current)

  }

  async function handleSubmitFavorite(e){
      e.preventDefault()
      const chekedElements=[]
      for(i=0;i<e.nativeEvent.target.length-1;i++){  
        if(e.nativeEvent.target[i].checked)  chekedElements.push(data[i])
     }
     if(chekedElements.length>0){
      const products=[]
      chekedElements.forEach(element => {
          products.push(element.product.id)
      });
      makeFetch({url:'favorites/bulk',method:'DELETE',body:{products:products},hasCredentials:true,makeRender:false})
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
      
     {data.length>0 ? data.map((element,index)=>(
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
