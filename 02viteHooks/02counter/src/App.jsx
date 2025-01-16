import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [ counter , setCounter ]= useState(0);
  
  const addValue= ()=>{
    console.log(counter);
    if(counter <20){
      setCounter(counter + 1);
    }else{
      console.log("The counter can not ne added further");
    }
  }
  const removeValue = () =>{
    if(counter>0){
      setCounter(counter -1)
    }else{
      console.log("The counter can not be decremented more");
    }
    

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
