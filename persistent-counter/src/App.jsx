import { useEffect, useState } from "react"

function App() {
  
  const [counter, setCounter] = useState(
                                parseInt(localStorage.getItem("value")) || 0);
  useEffect(()=>{
    localStorage.setItem("value", counter)
  },[counter])
 
  
  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:'center', alignItems:"center"}}>
      <h2 style={{textDecoration:"underline"}}>Persistent Counter</h2>
      <p>Even if you refresh the page, the counter will keep its value.</p>
      <p>value : {counter}</p>
      <button 
      onClick={()=>setCounter((prev)=>prev+1)}>Increment</button>
    </div>
  )
}

export default App
