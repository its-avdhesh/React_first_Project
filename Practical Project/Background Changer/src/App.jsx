import { useState } from "react"

function App() {
  const [color, setColour] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColour("red")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}> Red</button>
          <button
          onClick={() => setColour("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}> Green</button>
          <button 
          onClick={() => setColour("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}> Blue</button>
          <button 
          onClick={() => setColour("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "purple" }}> Purple</button>
          <button 
          onClick={() => setColour("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "orange" }}> Orange</button>
        </div>
      </div>
    </>
  )
}

export default App