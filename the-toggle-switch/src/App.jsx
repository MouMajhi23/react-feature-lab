import { useCallback, useState } from "react"
import ThemeButton from "./Components/ThemeButton";

function App() {

  console.log("Parent component rendered!")
  const [theme, setTheme] = useState("light");

  const handleToggle = useCallback(() => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")
  }, [])

  const [value, setValue] = useState(0)

  return (
    <div style={{display:"flex", flexDirection:"column", width:"20%", justifyContent:"center", alignItems:"center", gap:"4px"}}>
      <h4 style={{ textDecoration: 'underline' }}>Toggle Switch: using useCallbackHook</h4>
      <span>{value}</span>
      <button onClick={() => setValue((prev) => prev + 1)}>Increse</button>
      <ThemeButton handleTheme={handleToggle} theme={theme}>Change Theme</ThemeButton>
    </div>
  )
}

export default App
