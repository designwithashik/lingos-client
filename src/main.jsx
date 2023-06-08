import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import { HelmetProvider } from 'react-helmet-async'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={routes}/>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
