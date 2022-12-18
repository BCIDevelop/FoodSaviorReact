import React,{useContext} from 'react'
import { UserContext } from '../../context/UserContext'
import { NavLink } from 'react-router-dom'
import { indexPagesPrivate,indexPagesPublic } from '../../pages/Index'
import { ProductModel } from '../../model/ProductModel'
import { CategoryModel } from '../../model/CategoryModel'
import { FavoriteModel } from '../../model/FavoriteModel'
import './header.css'
const Header = ({setSideBar}) => {
  const {removeUser,user}=useContext(UserContext) 
  const navbarElements=user ? indexPagesPrivate : indexPagesPublic
  const activeStyle = {
    textDecoration: "underline",
  };
  /* App Header */
  function refreshProducts(){
    document.querySelector('#rotate').classList.add('rotate-animation')
      localStorage.setItem('products',JSON.stringify(ProductModel()))
      localStorage.setItem('categories',JSON.stringify(CategoryModel()))
      localStorage.setItem('favorites',JSON.stringify(FavoriteModel()))
  }
  function showSideBar(){
    setSideBar(true)
  }
  return (
    <header className="cabecera-menu">
      <div onClick={showSideBar} className="icon-pastel icon_inside">
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav className="navbar">
        <ul>
          {
           navbarElements.map((element)=>(

             <li key={element} ><NavLink to={`/${element.toLowerCase()}`} style={({isActive})=> isActive ? activeStyle : undefined}>{element}</NavLink></li>
           ))
          }
         
        </ul>
      </nav>
      <div className='menu-container'>

      <div className="menu-titulo icon_inside">FOOD SAVIOR</div>

      <div className="menu-options">
        <div className="icon_menu_options">
        <i id='rotate' onClick={refreshProducts} className="fa-solid fa-arrows-rotate"></i>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header
