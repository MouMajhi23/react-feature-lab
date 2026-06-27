import { useCallback, useState } from 'react'
import ChildComponent from './Component/ChildComponent'

function App() {
  const [value, setValue] = useState(0);
  const handleIncrease = useCallback(() => {
    setValue((prev) => prev+1)
  }, [])
  
  const [text, setText] = useState("")
  return (
    <>
      <h2>Hello !</h2>
      <input type="text" 
        value={text}
        placeholder='type here...'
        onChange={(e)=>setText(e.target.value)} />
      <ChildComponent handleIncrease={handleIncrease} value={value}/>
    </>
  )
}

export default App
