# Single-Open Accordion (React State & Accessibility)

This project is a lightweight React application that demonstrates how to build an **accessible, single-open accordion menu** using basic state management. It allows users to expand and collapse FAQ panels while automatically closing the previously open panel to keep the interface clean.

Please note: I have not enhanced the UI with CSS, as my main goal is mastering React core concepts, not CSS. You can add custom CSS styling as per your choice!

---

## 🚀 Features

* **Single-Open State Management:** Ensures only one accordion item is open at a time using a single state variable.
* **Toggle Interactivity:** Clicking an open accordion item automatically collapses it.
* **Built-In Accessibility (a11y):** Implements dynamic `aria-expanded` attributes along with matching `aria-controls` and `aria-labelledby` IDs for screen reader compatibility.
* **Declarative Mapping:** Dynamically renders list items from a structured JavaScript object array.

---

## 🛠️ How it Works

### 1. The Toggle Logic
The app maintains an `openId` state initialized to `null`. 
* When a user clicks an item's header button, the `handleToggle` function executes.
* If the clicked item's `id` matches `openId`, state resets to `null` (collapsing the panel).
* If a different item is clicked, `openId` updates to the new `id`, instantly opening the new panel and closing the old one.

### 2. Accessibility Mapping
Each button-panel pair is linked dynamically using unique IDs:
* The header button sets `aria-expanded={isOpen}` to communicate panel visibility to assistive technologies.
* `aria-controls={panelId}` on the button references the expanded section's ID, while `aria-labelledby={buttonId}` on the section points back to the controlling header.

---

## 🚀 How to Run

1. **Navigate to the folder:**
```bash
cd accordion
Install all packages:

Bash
npm install
Start the development server:

Bash
npm run dev