import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import './index.css'
import Toast from './components/toast/Toast'
import { AlertContextApp } from './context/AlertContext'
import {UserProviderLogin} from './context/UserContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProviderLogin>
      <AlertContextApp>
        <Toast></Toast>
         <Router></Router>
      </AlertContextApp>
      </UserProviderLogin>
     
  </React.StrictMode>
)
