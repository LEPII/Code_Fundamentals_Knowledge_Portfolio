//// React State Notes

//// Table Of Content

//// - Asynchronous State Updates
//// - React State Storage 


//// Asynchronous State Updates //// 

// What:
// When you call a state update function (like setState in class components or the setter function returned by useState in functional components), React doesn't immediately apply that change to the component's state and re-render the UI synchronously (in the exact order the code is executed). Instead, React may batch multiple state updates together and perform a single re-render at a later point in time.

// Why:
// 1. Performance Optimization (Batching):
// By batching these updates, React can collect all the state changes that occur within a certain timeframe (e.g., during the handling of an event) and then perform a single, more efficient re-render of the component with the final state.

// 2. Consistency
// By waiting until all state updates within a certain scope are processed before re-rendering, React ensures that the UI reflects the final state after all the changes have been applied.

//// React State Storage ////

// While you define state variables within your component's function body (using useState) or as properties of a class instance (this.state in class components), the actual storage and management of this state are handled by React's internal mechanisms, which are separate from the component instance itself.

// Why
// 1. Managing Component Lifecycle and Re-renders
// If state were solely tied to the individual component instance in a way that React couldn't easily track, orchestrating these re-renders and lifecycle events would be much more complex and less performant.

// React needs to:
// - Determine which components need to be re-rendered.
// - Calculate the changes to the Virtual DOM.
// - Efficiently update the actual DOM.
// - Manage the cleanup of effects.

// 2. Preserving State Across Re-renders
// React doesn't simply destroy the old component instance and create a new one from scratch (unless the component is unmounted). Instead, it tries to preserve the existing component instance and update its properties and internal state based on the changes.

// Optimization and Scheduling: By having centralized control over state updates and the rendering process, React can implement sophisticated optimizations and scheduling strategies to ensure a smooth and responsive user experience. It can prioritize certain updates, defer less important ones, and batch updates efficiently. 