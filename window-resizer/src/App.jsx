import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(()=>{
    const handleResize = ()=> {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }
    window.addEventListener('resize', handleResize);
    //demount
    return () => {
    window.removeEventListener('resize', handleResize);
    }
  },[])
  return (
    <>
      <section id="center">
        <h2>Window Resizer</h2>
        <p>Width : {width}</p>
        <p>Height : {height}</p>
      </section>
    </>
  )
}

export default App
