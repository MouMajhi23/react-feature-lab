# 🔢 Character Counter App
Feature: Real-time Input Tracking

Core Concept: Controlled Components & Conditional Styling

## 📝 Description
A functional text utility that monitors user input in real-time. It provides immediate feedback by displaying the remaining character count out of a set limit (200 characters). This project highlights how React maintains a "single source of truth" for form elements and how UI styles can react dynamically to data changes.

## 🛠️ Technical Implementation
Controlled Input: The textarea value is bound to the userInput state, ensuring the React state and the DOM are always in sync.

State Management: Uses useState("") to capture every keystroke via the onChange event handler.

Derived State: Instead of creating a second state for the count, the remaining value is calculated during every render: maxLen - userInput.length.

Dynamic Inline Styling: * Implements Style Objects with camelCase properties (e.g., backgroundColor, fontSize).

Uses a Ternary Operator in the style prop to switch between paraStyle and alertParaStyle based on the character threshold (< 10).

Spread Operator: Uses the ... spread operator to create alertParaStyle, inheriting base properties while overriding the text color.

## 🚀 How to Run
Navigate to the Directory:
Bash
npm install
Start the Development Server:
Bash
npm run dev
Interact:
Open the local URL provided in your terminal and begin typing in the textarea to see the counter and styling in action.