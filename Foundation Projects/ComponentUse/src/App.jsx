import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Comp/Hello';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hello/>
    </>
  )
}

export default App
