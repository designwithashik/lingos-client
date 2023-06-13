import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className="max-w-screen-2xl"></div>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}/>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
