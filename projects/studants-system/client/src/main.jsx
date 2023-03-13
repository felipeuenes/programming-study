import React from 'react'
import ReactDOM from 'react-dom/client'

import ResetStyle from './styles/reset'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/theme'
import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from './routes'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <RouterProvider router={router}/>
    
    <ResetStyle/>

    </ThemeProvider>
  // </React.StrictMode>,
)
