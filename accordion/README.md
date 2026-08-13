# React Accordion System (Single & Multiple Open)

This project is a lightweight React application that demonstrates how to implement **accordion components with two different interaction models**: single-panel expansion and multi-panel expansion. It serves as a practical guide for controlling component states depending on user requirements.

You can easily switch between rendering `<Accordion />` (single-open) and `<MultipleOpenAccordion />` (multi-open) in your `App.jsx` to test and practice both behaviors!

Please note: I have not enhanced the UI with CSS, as my main goal is mastering React core concepts, not CSS. You can add custom CSS styling as per your choice!

---

## 🚀 Features

* **Dual Operating Modes:** Includes two complete accordion implementations to practice state variations.
* **Single-Open Mode (`Accordion`):** Maintains strict single-panel visibility where opening a new item automatically closes the previous one.
* **Multi-Open Mode (`MultipleOpenAccordion`):** Allows users to expand and collapse multiple panels independently using array-based state tracking.
* **Built-In Accessibility:** Incorporates key `aria` attributes (`aria-expanded`, `aria-controls`, `aria-labelledby`) in the single-open variant for accessible UI standards.

---

## 🛠️ How it Works

### 1. Single-Open Accordion (`openId` as `String` / `null`)
The `<Accordion />` component tracks state using a scalar variable (`openId` initialized to `null`):
* When an item is clicked, `handleToggle` checks if the clicked `id` matches `openId`.
* If it matches, the panel closes (`openId` becomes `null`).
* Otherwise, `openId` is set to the new item's `id`, automatically collapsing any currently open section.

### 2. Multi-Open Accordion (`openId` as an `Array`)
The `<MultipleOpenAccordion />` component tracks open sections using an array of active IDs (`openId` initialized to `[]`):
* When an item is clicked, `handleToggle` checks if the `id` exists inside the array via `.includes(id)`.
* **If present:** It filters out the `id`, removing it from state and closing that section.
* **If absent:** It appends the new `id` to the state array using the spread operator (`[...openId, id]`), keeping other panels open.

---

## 🚀 How to Run

1. **Navigate to the folder:**
```bash
cd accordion-component
Install all packages:

Bash
npm install
Start the development server:

Bash
npm run dev