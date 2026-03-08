# 📝 Dynamic Form & Object State Management
Feature: Controlled Component with Real-time Validation

Core Concept: Single Object State Handling with the Spread Operator (...)

# 🔍 Description
This project demonstrates a robust pattern for handling multiple input fields using a single state object to avoid 'State Soup'. It focuses on maintaining data integrity during updates and implementing logical UI constraints (like disabling buttons) based on real-time user input rather than relying solely on HTML5 attributes.

# 🛠️ Technical Implementation
Single Source of Truth: Manages sname, mobile, and email within a single formData object to keep the state synchronized and scalable.

Immutability with Spread Operator: Employs setFormData(prev => ({ ...prev, [name]: value })) to update specific keys without losing existing data in other fields.

Computed Property Names: Uses ES6 dynamic keys [name] to create a single, reusable handleChange function for all input types.

Logical Validation: Implements a derived boolean isFormInvalid to calculate form completeness on every keystroke, providing immediate visual feedback.

Conditional Styling: Dynamically switches between submitButtonStyle and disableButtonStyle using React inline styles (camelCase) based on the validation state.

Input Constraints: Integrates Regex patterns for 10-digit mobile validation and email format checks directly within the React render logic.

# 🚀 How to Run
To run the Update Form feature locally:

1. Navigate to the Project Directory
Open your terminal and enter the feature folder:

Bash
cd UpdateForm
2. Install Dependencies
Install the necessary React packages:

Bash
npm install
3. Start the Development Server
Launch the project to view it in your browser:

Bash
npm run dev
4. View the App
Open http://localhost:5173 (or the port specified in your terminal) to test the form validation and submission logic.