//// React UseEffect Notes

//// Table Of Content

//// - General Notes

// What is UseEffect

// In functional components, you typically write code that calculates the UI based on props and state.
// However, many applications need to do more than just render UI including:
// - Data Fetching
// - interact with external systems,
// - perform asynchronous operations,
// - manage resources
// - Manipulating the DOM Directly
// - Subscriptions (e.g., WebSockets, Redux store)
// - Setting up and Cleaning up Event Listeners
// - Timers (e.g., setTimeout, setInterval)
// - Logging and Debugging

// Execution Timing
// - useEffect runs after the DOM has been updated by React.
// - Conceptually, you can think of useEffect as a way to tell React: "After every render (or after certain dependencies change), run this function."

// Cleanup Function (Optional)
// - The effect function can optionally return another function AKA a cleanup function.
// - The cleanup function is essential for preventing memory leaks and ensuring proper resource management (e.g., unsubscribing from event listeners, clearing timers).
// - React will run this cleanup function:
//  - Before the component unmounts.
//  - Before re-running the effect function due to a dependency change.

// The useEffect hook takes two arguments:
// 1. A function (the "effect" function
// - This is where you put the code for your side effect. This function will be executed after every render of your component, by default.
// 2. An optional dependency array
// - If you omit the dependency array, the effect function will run after every render of your component. This is rarely what you want for performance reasons, as it can lead to unnecessary re-executions.
// - If you provide an empty array, the effect function will run only once after the initial render, and the cleanup function will run only when the component unmounts.
// - If you include values in the dependency array, the effect function will re-run whenever any of those values change. React performs a shallow comparison of the dependencies.
