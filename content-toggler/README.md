# 🔍 Show More / Less Toggle
Feature: Conditional Content Rendering

Core Concept: Boolean State Management with useState

# 📝 Description
A common UI pattern used to handle long text or descriptions. It allows the user to expand or collapse content to keep the interface clean and improve readability. This project demonstrates how to sync a boolean state with both Text Content and Conditional Styling.

# 🛠️ Technical Implementation
State Management: Utilizes useState(false) to track the visibility of the extended content.

Functional Updates: Employs the setReadMore(prev => !prev) pattern to safely toggle the state based on the current value.

Conditional Rendering: Uses a ternary operator within the style attribute to switch between display: "none" and display: "block" (or inline).

Dynamic UI Text: The button label is dynamically calculated to switch between "Read More" and "Read Less" based on the readMore boolean.

Inline Styling: Implements React-specific camelCase CSS properties (e.g., backgroundColor, borderRadius) for the button and container layout.

# 🚀 How to Run
To run this specific example locally, follow these steps:

Navigate to the Project Directory:
Open your terminal and enter the folder:

## Bash
cd showMoreLessToggle
Install Dependencies:
Install the necessary React packages using npm:

## Bash
npm install
Start the Development Server:
Launch the project to view it in your browser:

## Bash
npm run dev
View the App:
Open http://localhost:5173 (or the port shown in your terminal) to interact with the toggle.
