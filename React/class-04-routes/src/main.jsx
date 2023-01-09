import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/index.jsx'
import { Galery } from './pages/Galery/index'
import { Contact } from './pages/Contacts/index'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Galery/>
    <Contact/>
  </React.StrictMode>,
)
