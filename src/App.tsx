import { useState } from 'react'
import './App.css'
import Login from './pages/Login'

import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Inventory from './pages/Inventory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/register",
    element: <div>Register</div>
  },
  {
    path: "/forgot",
    element: <div>Forgot Password</div>
  },
  {
    path: "/inventory",
    element: <Inventory />
  },
  {
    path: "/profile",
    element: <div>Profile</div>
  },
  {
    path: "/leaderboard",
    element: <div>Leaderboard</div>
  },

])


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
