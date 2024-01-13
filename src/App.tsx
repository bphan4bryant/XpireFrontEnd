import { useState } from 'react'
import './App.css'
import Inventory from './pages/Inventory'
import 'bootstrap/dist/css/bootstrap.min.css'
import CommonNavbar from './components/CommonNavbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CommonNavbar/>
      <Inventory/>
    </>
  )
}

export default App
