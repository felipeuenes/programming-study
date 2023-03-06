import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import ResetStyle from './styles/reset'
import { ThemeProvider } from 'styled-components'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={}>
    <App />
    <ResetStyle/>

    </ThemeProvider>
  </React.StrictMode>,
)
