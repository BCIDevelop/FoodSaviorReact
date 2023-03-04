import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import IsLandingPage from './utils/IsLandingPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import SideBar from './components/sideBar/SideBar'
import { LoaderContextApp } from './context/LoaderContext'
import Loader from './components/loader/Loader'
const Layout = ({ children }) => {
   
    const location=useLocation()
    const willRender = IsLandingPage(location.pathname)
    const [sidebarVisibility,setSideBar]=useState(false)
    return (
        
       <>
          <LoaderContextApp>
          {location.pathname!=='/login' &&location.pathname!=='/register' &&<Header setSideBar={setSideBar}/>}
          <div style={{position:'relative',height:'calc(100vh - 56px)'}}>
            <Loader location={location.pathname} ></Loader>

          {children}
           {sidebarVisibility &&<SideBar setSideBar={setSideBar} sidebar={sidebarVisibility}></SideBar>} 
           {willRender && <Footer/>} 

          </div>
          </LoaderContextApp>
      
       </>
    )
  }
  export default Layout