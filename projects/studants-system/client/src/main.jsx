import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import ResetStyle from './styles/reset'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ResetStyle/>
  </React.StrictMode>,
)
