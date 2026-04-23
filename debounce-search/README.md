# ⏱️ React Debounce Pattern (Performance Optimization)

**Feature:** High-Frequency Event Delay  
**Core Concept:** UseEffect Cleanup & Timeout Management

## 📝 Description
In modern web apps, triggering an action (like an API call or expensive calculation) on every single keystroke is inefficient and can crash servers. This project implements a **Debounce Pattern**, which ensures that a value is only updated after the user has stopped interacting for a specified duration (1000ms).

## 🛠️ Technical Implementation

* **State Synchronization:** * `item`: The "raw" state that updates instantly as the user types (controlled input).
    * `debounceValue`: The "processed" state that lags behind, waiting for the pause.
* **The Timer Strategy:** Inside `useEffect`, a `setTimeout` is initialized. If the component re-renders (user types again) before the time is up, the **Cleanup Function** (`clearTimeout`) is triggered immediately.
* **Memory Management:** The cleanup function is critical. Without `clearTimeout`, multiple timers would resolve simultaneously, causing a "stuttering" update effect and potential memory leaks.



## 💡 Why Use This?
1. **API Cost/Load:** If this were a search bar, you would fetch results based on `debounceValue` instead of `item`, reducing server requests by up to 90%.
2. **UI Stability:** Prevents "jumpy" layouts where the UI tries to re-render complex data for every single letter typed.

## 🚀 How to Run

1. **Navigate to the Project Directory:**
   ```bash
   cd debounce-search
Install Dependencies:

### Bash
#### npm install
Start the Development Server:

### Bash
#### npm run dev
Test the Logic: Open the browser console (F12). Type quickly in the input box. Notice that item changes instantly, but the "Debounce Value" log only appears once you stop typing.