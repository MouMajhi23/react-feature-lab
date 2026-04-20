# ⌨️ Keyboard Listener (Global Event Pattern)
Feature: Real-time Keypress Detection & Visualization

Core Concept: Global Event Subscription & Cleanup Lifecycle

## 📝 Description
An essential pattern for building accessible web applications, games, or custom shortcuts. This project captures and displays user keyboard input in real-time. It highlights the Subscription Model of useEffect, demonstrating how to listen to events happening outside the React component tree (on the window object) and how to safely "unsubscribe" to maintain optimal performance.

## 🛠️ Technical Implementation
State Capture: Utilizes useState to store an object containing the key, code, and keyCode of the last pressed key.

Global Subscription: Attaches a keydown event listener to the global window object. This ensures the app listens even if the user isn't clicking on a specific input field.

The Lifecycle Handshake: * Mount: The useEffect hook runs once on mount, establishing the connection to the browser's hardware events.

The Cleanup: Crucial for event-driven logic, the hook returns a removeEventListener call. This prevents "Ghost Listeners"—background processes that continue to run and consume memory even after the component is destroyed.

Event Normalization: Extracts specific properties from the KeyboardEvent object to provide a clean, readable UI for the user.

## 🚀 How to Run
To run this specific example locally, follow these steps:

Navigate to the Project Directory: Open your terminal and enter the folder:

## Bash
### cd keyboard-listener
#### Install Dependencies: Install the necessary React packages using npm:

## Bash
### npm install
#### Start the Development Server: Launch the project to view it in your browser:

## Bash
### npm run dev
#### View the App: Open http://localhost:5173 and start typing on your keyboard. Watch as the UI instantly reflects every key combination you press!