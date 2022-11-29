import React from 'react'
import { useLocation } from 'react-router-dom'
import IsLandingPage from './utils/IsLandingPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
const Layout = ({ children }) => {
    const location=useLocation()
    const willRender = IsLandingPage(location.pathname)
   
    return (
        
       <>
           {willRender && <Header/>}
          {children}
   
          {willRender && <Footer/>}
       </>
    )
  }
  export default Layout