import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
let allroutes=createBrowserRouter(
  [
    {
      path:'/',
      element:<HomePage/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={allroutes}/>
  </StrictMode>,
)
