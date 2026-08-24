# Precision Stopwatch (React Hooks & Timers)

This project is a lightweight React application that demonstrates how to build a **high-precision stopwatch** using React state and side-effects with `setInterval`. It highlights how to manage asynchronous interval timers, pad temporal values, and cleanly dispose of browser timers to prevent memory leaks.

Please note: I have not enhanced the UI with CSS, as my main goal is mastering React core concepts, not CSS. You can add custom CSS styling as per your choice!

---

## 🚀 Features

* **Millisecond Precision Tracking:** Updates time units continuously at 10-millisecond intervals.
* **Interval Lifecycle Management:** Employs `useEffect` cleanup return functions to safely destroy intervals on unmount or pause.
* **Formatted Time Display:** Converts raw numeric units into a normalized `MM:SS:MS` string format using strict mathematical floor divisions and string padding.
* **Functional Controls:** Features discrete Start, Stop, and Reset handlers to toggle running states independently.

---

## 🛠️ How it Works

### 1. The Interval Lifecycle & Cleanup
The component manages a boolean state `isRunning` alongside a numeric counter `miliseconds`.
* When `isRunning` turns `true`, `useEffect` instantiates a `setInterval` firing every 10 milliseconds.
* The state update uses functional updates (`prev => prev + 10`) to guarantee accurate time increments without capturing stale closures.
* Whenever `isRunning` flips to `false` or the component unmounts, the `return () => clearInterval(intervalId)` cleanup function executes immediately to avoid memory leaks.

### 2. Time Unit Calculation & Formatting
The display strings use standard mathematical conversions paired with JavaScript's `.padStart(2, "0")`:
* **Milliseconds (`formattedmMs`):** `Math.floor((miliseconds % 1000) / 10)` isolates two-digit hundredths of a second.
* **Seconds (`formattedSecond`):** `Math.floor((miliseconds % 60000) / 1000)` converts total milliseconds into remaining seconds under 60.
* **Minutes (`formattedMin`):** `Math.floor(miliseconds / 60000)` calculates total accumulated minutes.

---

## 🚀 How to Run

1. **Navigate to the folder:**
```bash
cd stopwatch
Install all packages:

Bash
npm install
Start the development server:

Bash
npm run dev