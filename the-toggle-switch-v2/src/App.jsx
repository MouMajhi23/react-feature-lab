import './App.css'
import Header from './Components/Header'
import ToggleButton from './Components/ToggleButton'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { createContext, useCallback, useState } from 'react'

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState('dark');
  const handleToggle = useCallback(() => {
    setTheme((prev) => prev === "light" ? "dark" : "light")
  },[])

  return (
    <ThemeContext.Provider value={{theme, handleToggle}} >
      <div className='app-wrapper'>
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
