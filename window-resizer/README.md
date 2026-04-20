# 📏 Window Resizer (Cleanup Pattern)
Feature: Real-time Window Dimension Tracking
Core Concept: Side Effect Lifecycle & Memory Management with useEffect
# 📝 Description
A vital utility for responsive design. This project tracks the browser window's width and height in real-time. It demonstrates the critical "Cleanup" phase of the useEffect hook, ensuring that global event listeners are properly destroyed when the component is no longer in use to prevent memory leaks.

# 🛠️ Technical Implementation
State Management: Uses useState to store the current window.innerWidth and window.innerHeight values.

Event Synchronization: Attaches a resize event listener to the global window object inside useEffect.

The Mount Phase: Uses an empty dependency array [] to ensure the event listener is added only once when the component first renders.

The Cleanup Function: Returns a function from useEffect that calls window.removeEventListener. This is an essential industry practice to keep the application performant and bug-free.

Dynamic UI: Automatically re-renders the text display every time the browser window is dragged or resized.

# 🚀 How to Run
To run this specific example locally, follow these steps:

Navigate to the Project Directory: Open your terminal and enter the folder:

## Bash
### cd windowResizer
##### Install Dependencies: Install the necessary React packages using npm:

## Bash
### npm install
#### Start the Development Server: Launch the project to view it in your browser:

## Bash
### npm run dev
#### View the App: Open http://localhost:5173 and try resizing your browser window to see the dimensions update live.