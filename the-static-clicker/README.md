# The Static Clicker (React Optimization)

This project is a lightweight React application that demonstrates how to maintain performance stability using `useCallback` and `React.memo`. It showcases how to isolate state changes (like typing in a text field) so they do not cause unnecessary re-renders in a child component that relies on a parent function handler.

Please note: I have not enhanced the UI with CSS, as my main goal is mastering React core concepts, not CSS. You can add custom CSS styling as per your choice!

---

## 🚀 Features

* **Dual State Isolation:** Manages independent states for both text input changes and numerical counters.
* **Function Reference Stabilization:** Utilizes `useCallback` to cache the memory address of the incremental counter function.
* **Component-Level Memoization:** Prevents the child button component from re-rendering when unrelated text changes happen in the parent.
* **Functional State Updates:** Employs functional state updates (`prev => prev + 1`) to eliminate the need for dependencies inside the callback hook.

---

## 🛠️ How it Works

### 1. The Multi-State Re-render Problem
By default, whenever a user types into the text field, the parent component updates its `text` state and triggers a re-render. If `handleIncrease` were declared as a standard function, a brand-new function instance would be created on every single keystroke. This would force the child component to re-render constantly, even though the counter `value` hadn't changed.

### 2. The Solution: `useCallback` + `React.memo`
* **`useCallback`:** The `handleIncrease` function is wrapped in `useCallback` with an empty dependency array (`[]`). Because we use the functional form of `setValue`, the hook never needs to recreate the function. Its reference remains perfectly identical.
* **`React.memo`:** The `ChildComponent` is wrapped in `React.memo`. When you type in the text box, the parent re-renders, but `ChildComponent` receives the exact same `value` prop and the exact same `handleIncrease` function reference. As a result, it completely skips re-rendering! It will only re-render when the "Increase" action actually updates the `value` prop.

---

## 🚀 How to Run

1. **Navigate to the folder:**
```bash
cd the-static-clicker

Install all packages:

Bash
npm install
Start the development server:

Bash
npm run dev