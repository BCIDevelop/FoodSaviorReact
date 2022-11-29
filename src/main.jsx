import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import './index.css'
import {UserProviderLogin} from './context/UserContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProviderLogin>
         <Router></Router>
      </UserProviderLogin>
     
  </React.StrictMode>
)
