# ❤️ Like Counter (Toggle Logic)
Feature: Status Toggling & Dynamic Increment

## Core Concept: Functional State Updates

## 📝 Description
This component simulates a social media "Like" interaction. It synchronizes two pieces of state: the visual icon representation and the numerical count. It demonstrates how to handle conditional logic within a single event handler to perform both "Like" and "Unlike" actions.

## 🛠️ Technical Implementation
Functional State Updates: Uses the prev => prev +/- 1 pattern in setCount to ensure state updates are based on the most accurate previous value.

Conditional Logic: A single handleLike function checks the liked boolean to determine whether the count should increase or decrease.

State Synchronization: The liked boolean and the count integer are updated simultaneously to keep the UI consistent.

## 📦 Dependencies
This project uses the Ant Design icon set from the react-icons library.

To install the library, run the following command in your terminal:

Bash
npm install react-icons
### 🚀 How to Run
Navigate to the folder:

Bash
### cd like-count
Install all packages:

Bash
### npm install
Install the icon library (if not already present):

Bash
### npm install react-icons
Start the development server:

Bash
### npm run dev