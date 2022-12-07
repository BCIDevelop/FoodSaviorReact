import React,{useState} from 'react'
import ElementCard from './elementCard/ElementCard'
import FrutasyVerduras from '../../../assets/FrutasyVerduras.svg'
import './categoryCards.css'
const CategoryCards = () => {
   const [elementVisibility,setElementVisibility]=useState(false)
   
   function hamburgerClicked(){
     const hambElement=document.querySelectorAll('.hamburger')
     const parts =['top','mid','bottom']
      hambElement.forEach((element,index)=>{
         element.classList.toggle(`hamburger_container_${parts[index]}`)
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
        <a className="producto-cabecera" href="#">Abarrotes</a>
        <p className="producto-descripcion">Secondarry text</p>
      </div>
      <div className="product-symbol">
      <div onClick={hamburgerClicked} className="hamburger__container">
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger"></div>
     </div>
      </div>
    </div>
  </ul>
  {elementVisibility && <ElementCard></ElementCard> }
   
  </div>

  )
}

export default CategoryCards
