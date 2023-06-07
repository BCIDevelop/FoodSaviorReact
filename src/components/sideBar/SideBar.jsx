import React,{ useContext ,useLayoutEffect} from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { indexPagesPrivate,indexPagesPublic } from '../../pages/Index'
import useFetch from '../../hooks/useFetch'

const SideBar = ({setSideBar}) => {
    const {user,removeUser}=useContext(UserContext)
    const [{data},makeFetch,setUser]=useFetch({url:'profile/me',method:'GET',body:{},hasCredentials:true,makeRender:true}) 
    const navbarElements=user ? indexPagesPrivate : indexPagesPublic
    const activeStyle = {
      textDecoration: "underline",
    };
    const rand= Math.random()
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
  
    useLayoutEffect(()=>{
      const timerId=setTimeout(()=>{
        document.getElementById('container__category').classList.add('navbar-on')
      },100) 
      return ()=> {
        clearInterval(timerId)
        
      }
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
          <img key={rand} className="img-perfil" src={data?.avatar} alt="" />
          </div>
          <div>
          <h1>Hola {data?.username}</h1>
          <p>{data?.email}</p>
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