import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { AppRoutes } from './Routes'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <AppRoutes />
    
    </BrowserRouter>
  </React.StrictMode>,
)
