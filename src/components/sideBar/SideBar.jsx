import React,{ useEffect,useContext, useState } from 'react'
import './sidebar.css'
import perfilImg from '../../assets/perfil.jpg'
import { useLayoutEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { indexPagesPrivate,indexPagesPublic } from '../../pages/Index'
import { AlertContext } from '../../context/AlertContext'
import { useNavigate } from 'react-router-dom'
import { getUserService } from '../../globalServices/user.service'

const SideBar = ({setSideBar}) => {
    const [activeUser,setActiveUser]=useState({})
    const {user,removeUser}=useContext(UserContext)
    const {showToast}=useContext(AlertContext)
    const history=useNavigate()
    const navbarElements=user ? indexPagesPrivate : indexPagesPublic
    const activeStyle = {
      textDecoration: "underline",
    };
    function closeSideBar(){
      document.getElementById('container__category').classList.remove('navbar-on');
      setTimeout(()=>{
        setSideBar(false)
      },450)
    }
    function logOut(){
      
      setSideBar(false)
      removeUser()
    }
    async function getProfile(){
       const response= await getUserService(history,showToast,removeUser)
       setActiveUser(response)
    }
    useLayoutEffect(()=>{
      const timerId=setTimeout(()=>{
        document.getElementById('container__category').classList.add('navbar-on')
      },100) 
      return ()=> {
        clearInterval(timerId)
        
      }
    },[])
    useEffect(()=>{
        getProfile()
    },[])




  return (
    <section id="container__category">
    <div className="sidebar">
      <span className="icon_x">
        <i onClick={closeSideBar} className="fa-solid fa-xmark"></i>
      </span>
      { user &&
        ( <div className="datos__personales">
         <div>
<<<<<<< HEAD
          <img className="img-perfil" src={user.picture?user.picture:perfilImg} alt="" />
=======
          <img className="img-perfil" src={activeUser?.avatar} alt="" />
>>>>>>> 0835ad7b5cff7827ba406f81914abe6cee79a8aa
          </div>
          <div>
          <h1>Hola {activeUser?.username}</h1>
          <p>{activeUser?.email}</p>
        </div>
        </div>)
      }
 

      <div className="lista_menu">
        <div className="list_container">
          {
            navbarElements.map((element)=>(
              <div key={`navbar${element}`} className="list">
            <div className="lista-icon">
              <i className="fa-solid fa-bell"></i>
            </div>
            <li onClick={ ()=>{ setSideBar(false)}}><NavLink to={`/${element.toLowerCase()}`} style={({isActive})=> isActive ? activeStyle : undefined}>{element}</NavLink></li>
          </div>
         
            ))
          }
          
        </div>
      

      </div>

      <div className="salida">
          <div className="list">
            <div className="lista-icon">
              <i className="fas fa-sign-out"></i>
            </div>
            { user && <li onClick={logOut}>Log Out</li>}
          </div>
        </div>
    </div>
  </section>
  )
}

export default SideBar
