# Debounced Search With Dummy API

This project is a lightweight React application that demonstrates how to implement **API data fetching** combined with a **Debouncing mechanism**. It allows users to search for comments via email from the JSONPlaceholder API without overwhelming the server with requests on every keystroke.

---

## 🚀 Features

* **Real-time Search:** Filter data by email using a clean input interface.
* **Custom Debounce Logic:** Utilizes `setTimeout` and `useEffect` cleanup to delay API calls until the user stops typing (500ms).
* **Error Handling:** Manages and displays HTTP errors or network failures gracefully.
* **Loading States:** Provides visual feedback while data is being fetched.
* **Asynchronous Operations:** Uses `async/await` for clean, readable data fetching logic.
Please note : I have not enhance the UI with CSS , as my main goal is React not css, you can add css styling as per your choice.

---

## 🛠️ How it Works

### 1. The Debounce Logic
Instead of firing a fetch request on every character change, the app uses a `debounceId` state. 
* When the user types, a timer starts.
* If the user types again before 500ms, the previous timer is cleared.
* Once the timer finishes, `debounceId` is updated, triggering the actual API call.

### 2. Data Fetching
The application interacts with the **JSONPlaceholder API**:
`https://jsonplaceholder.typicode.com/comments?email={debounceId}`

---

## 🚀 How to Run

**Navigate to the folder:**
```bash
cd debounce-search-v2
Install all packages:

Bash
npm install
Start the development server:

Bash
npm run dev