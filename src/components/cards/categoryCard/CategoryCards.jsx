import React,{useState} from 'react'
import ElementCard from './elementCard/ElementCard'
import FrutasyVerduras from '../../../assets/FrutasyVerduras.svg'
import { ProductModel } from '../../../model/ProductModel'
import './categoryCards.css'
const CategoryCards = ({index,categoryName}) => {
   const [elementVisibility,setElementVisibility]=useState(false)
   function getCategoryElement(){
        return ProductModel().filter((element)=>{
           return element.category=== categoryName
        })
        
   }
   function hamburgerClicked(){
     const hambElement=document.querySelectorAll(`.hamburger${index}`)
     const parts =['top','mid','bottom']
      hambElement.forEach((element,indexParts)=>{
         element.classList.toggle(`hamburger_container_${parts[indexParts]}`)
      })
      setElementVisibility(prev=> !prev)
   }
  return (
    <div className='container-category'>

    <ul className="contenedor-productos">
    <div className="icon-pacman">
      <img className="img-product" src={FrutasyVerduras} alt="" />
    </div>
    <div className="producto-detalle">
      <div className="product-opciones">
        <a className="producto-cabecera" href="#">{categoryName}</a>
        <p className="producto-descripcion">Secondarry text</p>
      </div>
      <div className="product-symbol">
      <div onClick={hamburgerClicked} className="hamburger__container">
      <div className={`hamburger hamburger${index}`}></div>
      <div className={`hamburger hamburger${index}`}></div>
      <div className={`hamburger hamburger${index}`}></div>
     </div>
      </div>
    </div>
  
  </ul>
  {elementVisibility && <ElementCard  index={index} categoryName={categoryName}></ElementCard> }
   
  </div>

  )
}

export default CategoryCards
