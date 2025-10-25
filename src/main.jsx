import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Components/Route/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Components/Provider/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
 <RouterProvider router={router} />
    </AuthProvider>
     
  </StrictMode>,
)
