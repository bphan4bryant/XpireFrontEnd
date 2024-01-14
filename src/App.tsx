import { useState } from 'react'
import './App.css'
import Inventory from './pages/Inventory'
import 'bootstrap/dist/css/bootstrap.min.css'
import CommonNavbar from './components/CommonNavbar'
import Leaderboard from './pages/Leaderboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CommonNavbar/>
      <Leaderboard/>
    </>
  )
}

export default App
