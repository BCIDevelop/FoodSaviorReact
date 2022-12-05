import React,{useContext,useState} from 'react'
import { UserContext } from '../../context/UserContext'
import { NavLink } from 'react-router-dom'
import { indexPagesPrivate,indexPagesPublic } from '../../pages/Index'
import './header.css'
const Header = ({setSideBar}) => {
  const {removeUser,user}=useContext(UserContext) 
  const navbarElements=user ? indexPagesPrivate : indexPagesPublic
  const activeStyle = {
    textDecoration: "underline",
  };
  /* App Header */
  function logOut(){
    sessionStorage.clear()
    removeUser()
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

      <div className="menu-titulo icon_inside">FOOD SAVIOR</div>

      <div className="menu-options">
        <div className="icon_menu_options">
          <i className="fa-solid fa-bell"></i>
        </div>
      </div>
    </header>
  )
}

export default Header
