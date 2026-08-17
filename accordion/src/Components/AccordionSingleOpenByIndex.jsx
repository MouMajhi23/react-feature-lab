import { useState } from "react";

const ACCORDION_ITEMS = [
    {
        heading: "What is React, and what are its main features?",
        text: `React is a JavaScript library developed by Facebook for 
        creating user interfaces, particularly in single-page applications. 
        It enables the use of reusable components that manage their own state. 
        Key advantages include a component-driven architecture, optimized updates 
        through the virtual DOM, a declarative approach for better readability, 
        and robust community backing.`

    },
    {
        heading: "What is JSX and how does it work?",
        text: "JSX, short for JavaScript XML, is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes building React components easier. JSX gets converted into JavaScript function calls, often by Babel. For instance, <div>Hello, world!</div> is transformed into React.createElement('div', null, 'Hello, world!').",
    },
    {
        heading: "Explain the concept of the Virtual DOM in React",
        text: "The virtual DOM is a simplified version of the actual DOM used by React. It allows for efficient UI updates by comparing the virtual DOM to the real DOM and making only the necessary changes through a process known as reconciliation",
    },
    {
        heading: "What are props in React?",
        text: "Props (short for properties) are inputs to React components that allow you to pass data from a parent component to a child component. They are immutable and are used to configure a component. In contrast, state is internal to a component and can change over time, typically due to user interactions or other events.",
    },
];

const AccordionSingleOpenByIndex = () => {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId((prev) => prev === id ? null : id)
    }
    return (
        <ul>
            {
                ACCORDION_ITEMS.map((item, index) => {
                    const isOpen = openId === index;
                    return (
                        <li>
                            <div>
                                <span>{item.heading}</span>
                                <button onClick={() => handleToggle(index)}>{isOpen ? "-" : "+"} </button>
                            </div>
                            {isOpen && <div>{item.text}</div>}
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default AccordionSingleOpenByIndex;