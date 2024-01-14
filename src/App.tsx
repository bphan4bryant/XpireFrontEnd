import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import LandingBg from './components/LandingBg'
import RegisterPage from './pages/register'

import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Inventory from './pages/Inventory';
import Leaderboard from './pages/Leaderboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/register",
    element: <RegisterPage />
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
    element: <Leaderboard/>
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
