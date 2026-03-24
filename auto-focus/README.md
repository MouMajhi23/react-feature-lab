# 🎯 React AutoFocus & useEffect Lifecycle
This component demonstrates how the useEffect dependency array controls the execution of side effects, using an input focus as the primary example.

## 📝 Key Concepts Demonstrated
### 1. The Mounting Phase (Run Once) 🏔️
Logic: useEffect(() => { ... }, [])

Result: The input focuses only when the page first loads.

Why: The empty array [] tells React there are no dependencies to watch, so it never re-runs after the initial render.

### 2. No Dependency Array (Run on Every Render) 🔄
Logic: useEffect(() => { ... })

Result: The input snaps focus every time the user clicks the "Click me" button.

Why: Without an array, React runs the effect after every render, regardless of what changed.

### 3. Conditional Sync (Dependency Array) ⚖️
Logic: useEffect(() => { ... }, [count])

Result: The focus is triggered only when count is an even number.

Why: React "watches" the count variable. When it changes, the effect runs, and our if(count % 2 === 0) logic decides whether to apply the focus.

🛠️ Technical Tools Used
useRef: Used to create a direct reference to the <input> DOM node so we can call the native .focus() method.

useState: Used to trigger re-renders and provide a value for the conditional logic.