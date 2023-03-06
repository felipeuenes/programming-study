import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import ResetStyle from './styles/reset'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <App />
    <ResetStyle/>

    </ThemeProvider>
  </React.StrictMode>,
)
