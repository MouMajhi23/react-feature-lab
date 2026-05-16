import { useState } from 'react'
import Parent from './Component/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>
      This is example of react memo
    </h2>
    <Parent/>
      
    </>
  )
}

export default App
