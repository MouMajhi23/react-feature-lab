# The Expensive Child (React Optimization)

This project is a lightweight React application that demonstrates how to implement **component optimization** using `React.memo`. It showcases how a parent component's state changes can trigger unnecessary re-renders in a child component that performs heavy, expensive calculations, and how to prevent it.

Please note: I have not enhanced the UI with CSS, as my main goal is mastering React core concepts, not CSS. You can add custom CSS styling as per your choice!

---

## 🚀 Features

* **Parent State Management:** A clean click-counter tracking updates natively via `useState`.
* **Expensive Calculations:** A simulated heavy loop operation inside the child component that aggregates calculations dynamically based on incoming integers.
* **Console Logging Telemetry:** Real-time visibility into the exact execution block where component lifecycles trigger re-renders.
* **Performance Control Hook:** Optimized component delivery preventing rendering overhead utilizing React's higher-order component strategy (`memo`).

---

## 🛠️ How it Works

### 1. The Default React Behavior
By default, whenever a parent component updates its state (`count`), React schedules a re-render for that component and recursively re-renders all of its children, regardless of whether the child's `props` changed or not. 

### 2. The Solution: `React.memo`
To avoid running the expensive `calculation` function on every single click of the "Increase" button, the child component is wrapped in `memo`:
* When the parent re-renders, React checks the properties (`props`) passed to `<Child />`.
* Since the prop `value={10}` remains constant across parent renders, `React.memo` intercepts the pipeline, skips executing the component function entirely, and reuses the last rendered output.

---

## 🚀 How to Run

1. **Navigate to the folder:**
```bash
cd the-expensive-compononent
Install all packages:

Bash
npm install
Start the development server:

Bash
npm run dev