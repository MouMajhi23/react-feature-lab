//The Toggle Button: A parent passes a toggleStatus function to a memoized child switch
//Optimize it so the switch doesn't re-render when other parent inputs change.
import { useState, useEffect , useRef} from 'react'
import './App.css'


function App() {
  const [textInput, setTextInput] = useState("");
  const [theme, setTheme] = useState("light");
  const handleThemeManager = ()=>{
    setTheme(theme === "light" ? "dark" : "light");
    console.log("Theme: ",theme)
  }
  const previousFunctionRef = useRef(handleThemeManager);

  // 2. Run a check after every render
  useEffect(() => {
    const hasFunctionChanged = previousFunctionRef.current !== handleThemeManager;
    console.log("Is handleThemeManager a brand new function in memory?", hasFunctionChanged);
    
    // 3. Update the ref to hold the current function for the next render
    previousFunctionRef.current = handleThemeManager;
  }); // No dependency array means this runs on every single render

  return (
    <div style={{marginTop:"20px"}}>
      <h3>App component</h3>
      <button 
      onClick={handleThemeManager}>{theme}</button>
      <br />
      <input 
        type="text"
        placeholder='type here'
        value={textInput}
        onChange={(e)=>{setTextInput(e.target.value)
          console.log("Input:", textInput)
        }
        }  />
    </div>
  )
}

export default App
