import { useEffect, useState } from "react"

function App() {
  const [item, setItem] = useState("");
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setDebounceValue(item)
    },1000)
    return(()=>clearTimeout(timeout))
  },[item])
  console.log("Input Value:",item)
  console.log("Debounce Value:", debounceValue); 
  return (
    <div 
      style={{
        height:"100vh",
        display:"flex", 
        flexDirection:"column",
        alignItems:"center", 
        justifyContent:"center"
      }}>
      <h2>Debounce Component</h2>
      <p>check in console to see the debounce value!</p>
      <input 
        type="text"
        placeholder="Search here..."
        value={item}
        onChange={(e)=>setItem(e.target.value)} />
    </div>
  )
}

export default App
