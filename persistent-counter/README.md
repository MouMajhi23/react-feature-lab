# 💾 Persistent State Logger

### Feature: State Synchronization with LocalStorage
### Core Concept: Dependency Tracking & Syncing Side Effects

## 📝 Description
This project demonstrates how to persist React state across browser refreshes. It explores the synchronization between the React state (in-memory) and the Browser Storage API (persistent), ensuring a seamless user experience.

## 🛠️ Technical Implementation
* **Initial State Logic:** Uses a "Lazy Initializer" pattern with `parseInt` and `localStorage.getItem` to retrieve data on the very first render.
* **Effect Synchronization:** Employs `useEffect` with `[counter]` as a dependency to ensure `localStorage` stays updated automatically whenever the state changes.
* **Data Sanitization:** Implements logical OR (`|| 0`) to handle cases where the storage key might be empty (null).

## 🚀 Key Takeaway
Side effects that depend on state should live in `useEffect`. This keeps the rendering logic "pure" and ensures that external API calls (like `setItem`) only happen when the relevant data actually changes.