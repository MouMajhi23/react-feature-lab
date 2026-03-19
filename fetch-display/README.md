# 🌐 API Data Fetching (Loading & Error States)
Feature: Remote Data Integration

## Core Concept: Asynchronous State Management & Side Effects

### 📝 Description
This component demonstrates a robust pattern for fetching and displaying data from a REST API (JSONPlaceholder). It focuses on the Triple State management strategy, ensuring the user is informed of the application's status during every phase of the network request: Loading, Success, or Error.

### 🛠️ Technical Implementation
Effect Hook (useEffect): Encapsulates the network request to run exactly once when the component mounts using an empty dependency array ([]).

### Async/Await Architecture: Uses modern asynchronous JavaScript within a try...catch...finally block for clean, readable logic.

Triple State Management:

data: Stores the array of post objects. Initialized as null.

loading: A boolean flag to provide immediate feedback to the user while the request is in flight.

error: Captures and stores error messages to prevent the application from crashing during network failures.

Manual Response Validation: Checks if(!response.ok) to catch HTTP error statuses (like 404 or 500) that the fetch API does not automatically catch in the catch block.

Efficient Data Rendering: Uses the .map() method to transform the data array into a list of <li> elements, using the unique post.id as the React key.

### 📦 Dependencies
React Hooks: useState, useEffect

### API Source: JSONPlaceholder

### 🚀 How to Run
Navigate to the folder:

### Bash
cd fetchDisplay
Install all packages:

### Bash
npm install
Start the development server:

### Bash
npm run dev