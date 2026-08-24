import { useEffect, useState } from "react"

function App() {
  const [miliseconds, setMilieconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  //1 second = 1000 ms
  const formattedmMs = String(Math.floor((miliseconds % 1000) / 10 )).padStart(2,"0");
  const formattedSecond = String(Math.floor((miliseconds % 60000) / 1000)).padStart(2,"0");
  const formattedMin = String(Math.floor((miliseconds / 60000))).padStart(2,"0");

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setMilieconds((prev) => prev + 10)
      }, 10)
    }

    return () => clearInterval(intervalId)
  }, [isRunning])

  const handleStart = () => {
    setIsRunning(true)

  }

  const handleStop = () => {
    setIsRunning(false)
    console.log("Timer Stopped")
  }

  const handleReset = () => {
    setIsRunning(false);
    setMilieconds(0);
    console.log("Timer Reseted!")
  }

  return (
    <>
      <p>Stopwatch</p>
      <p>{formattedMin}:{formattedSecond}:{formattedmMs}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
