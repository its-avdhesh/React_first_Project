import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [ counter , setCounter ]= useState(15);
  
  const addValue= ()=>{
    console.log("Value Added", Math.random());
    console.log(counter);
    setCounter(counter + 1)
  }
  const removeValue = () =>{
    setCounter(counter -1)
  }

  return (
    <>
    <h1>We are using the Hooks Here with the help of counter</h1>
    <h2>Counter count: {counter}</h2>

    <button 
    onClick={addValue}>Add count</button>
    <br></br><br></br>
    <button
    onClick={removeValue}>Subtract count</button>
    </>
  )
}

export default App
