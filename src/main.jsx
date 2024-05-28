import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Signup from './Signup.jsx'
import Signin from './Signin.jsx'
import Home from './Home.jsx'
import Header from './Header.jsx'
import { Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




function Maina() {
  return (
    <div>
      <Header/>
      <ToastContainer/>
      <Outlet/>

      
    </div>
  )
}
const routera=createBrowserRouter([
  {
    path:'/',
    element:<Maina/>,
    children:[
      {
        path:'/',
        element:<Signup/>
      },
      {
        path:'/Signup',
        element:<Signup/>
      },
      {
        path:'/signin',
        element:<Signin/>
      },
      {
        path:'Home',
        element:<Home/>
      },
    ]
  }
  
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={routera} />)
