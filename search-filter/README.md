# 🔍 Search Filter (Derived State & Object Mapping)
Feature: Real-time List Filtering

## Core Concept: Derived State vs. Redundant State

## 📝 Description
A high-performance search utility that filters a list of data as the user types. This project demonstrates a critical React architectural pattern: calculating values during render. Instead of storing filtered results in a separate state, the component derives the results from the master data and the search query, ensuring the UI is always a pure reflection of the state.

### 🛠️ Technical Implementation
Derived State Pattern: The result variable is calculated on every render using .filter(). This prevents "state synchronization" bugs and reduces memory overhead.

### Object-Oriented Data: 
Transitions from simple strings to an array of objects { id, name }. This mimics real-world API responses and allows for more complex data handling.

### Case-Insensitive Logic:
Normalizes both the search term and the data using .toLowerCase() to provide a seamless user experience.


## 🚀 How to Run
Navigate to the folder:

## Bash
cd search-filter
Install all packages:

## Bash
npm install
Start the development server:

## Bash
npm run dev