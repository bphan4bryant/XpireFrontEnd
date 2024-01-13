import { useState } from 'react'
import './App.css'
import Inventory from './pages/Inventory'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inventory/>
    </>
  )
}

export default App
