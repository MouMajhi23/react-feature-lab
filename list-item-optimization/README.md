# Todo List with Optimized Child Re-renders

This project is a lightweight React application that demonstrates how to implement **performance optimization** using a combination of `useCallback` and `React.memo`. It showcases how to prevent unnecessary re-renders in list items when the parent component's state changes, specifically when items are deleted from a list.

Please note: I have not enhanced the UI with CSS, as my main goal is mastering React core concepts, not CSS. You can add custom CSS styling as per your choice!

---

## 🚀 Features

* **Dynamic List Management:** Render a list of pre-defined tasks that can be individual removed from the UI using state filters.
* **Function Reference Memoization:** Utilizes the `useCallback` hook to lock the reference of the deletion handler across component re-renders.
* **Component-Level Caching:** Prevents safe list items from triggering render passes using `React.memo` for shallow prop comparisons.
* **Console Telemetry Logging:** Real-time feedback in the browser console showing exactly when children are rendering or when actions trigger.

---

## 🛠️ How it Works

### 1. The Reference Problem with Functions
In React, whenever a parent component updates its state (`items`), every function declared inside it gets re-created with a brand-new memory address. If passed as a prop, child components think they are receiving entirely new data and will re-render, even if wrapped in `React.memo`.

### 2. The Solution: `useCallback` + `React.memo`
* **`useCallback`:** By wrapping `handleDelete` in `useCallback` with an empty dependency array (`[]`), React caches the function instance. The exact same memory reference is reused on every single render.
* **`React.memo`:** The `ListCard` child component is wrapped in `React.memo`. When an item is deleted, the parent state changes, but the remaining `ListCard` components see that their `task`, `id`, and `handleDelete` function references haven't changed. As a result, they completely skip re-rendering!

---

## 🚀 How to Run

1. **Navigate to the folder:**
```bash
cd todo-callback-optimization
Install all packages:

Bash
npm install
Start the development server:

Bash
npm run dev