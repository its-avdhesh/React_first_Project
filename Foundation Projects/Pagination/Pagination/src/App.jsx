import { useState } from 'react'
import './App.css'
import Pagination from './Component/Pagination'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Pagination/>
   </>
  )
}

export default App
