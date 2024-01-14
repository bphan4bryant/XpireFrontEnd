import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import LandingBg from './components/LandingBg'
import RegisterPage from './pages/register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingBg>
        <RegisterPage />
      </LandingBg>
      {/* <Login /> */}
    </>
  )
}

export default App
