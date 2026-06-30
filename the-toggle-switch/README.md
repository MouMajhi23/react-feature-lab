The Dynamic Theme Switcher (React Optimization)
This project is a lightweight React application that demonstrates how to prevent unnecessary component re-renders during state mutations using useCallback and React.memo. It showcases how to isolate state changes (like numerical counters or input changes) so they do not cause redundant re-renders in a child component that handles structural layout toggles (like switching between Light and Dark themes).

Please note: The layout focus remains strictly on mastering React core optimization mechanics. You can add custom CSS variables to hook into the theme state for aesthetic transitions as per your choice!

🚀 Features
State Disruption Isolation: Manages independent states for an isolated numeric counter and a global theme toggle.

Stable Action References: Utilizes useCallback to preserve the referential identity of the theme-switching function across parent lifecycles.

Shallow Prop Guarding: Employs React.memo around the theme trigger interface to skip reconciliation when unrelated parent state updates fire.

Encapsulated Updates: Implements functional state updaters (prevTheme => ...) to keep the hook's dependency array completely empty ([]), ensuring maximum reference longevity.

🛠️ How it Works
1. The Redundant Prop Problem
In a standard React tree, if a user clicks an unrelated action (like an "Increase Count" button), the parent component re-renders to paint the new number. If the theme-switching handler were standard prose, a brand-new function reference would allocate in memory on that render. Even if a child component is memoized, this new reference breaks shallow prop equality, forcing the UI block to waste cycles re-rendering.

2. The Solution: useCallback + React.memo
useCallback: The handleToggle function is memoized with an empty dependency array ([]). Because it reads the previous state internally via an explicit functional callback (prevTheme === "light" ? "dark" : "light"), it remains entirely detached from external scope fluctuations.

React.memo: The ThemeButton is wrapped in a higher-order component memoization layer. When the counter increments, the parent re-renders, but ThemeButton detects that its handleTheme function pointer and theme text are identical to the previous render. It completely skips execution! It will explicitly and correctly re-render only when the theme state itself mutates.

🚀 How to Run
Navigate to the folder:

Bash
cd the-toggle-switch
Install all packages:

Bash
npm install
Start the development server:

Bash
npm run dev