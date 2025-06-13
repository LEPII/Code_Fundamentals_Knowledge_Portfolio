//// React General Notes

//// Table Of Content

//// - General Notes
//// - Data, State and Props

//// General Notes ////

// - React uses a Virtual DOM as an intermediary. Instead of directly manipulating the browser's DOM, React creates an in-memory representation (the Virtual DOM).

// - When your component's state changes, React first updates the Virtual DOM and then efficiently calculates the minimal set of changes needed to update the actual browser DOM.

// - File names being PascalCase is  very strong convention and highly recommended best practice.

//

// - Platform Agnostic - React's core rendering logic is separate from the target environment.

// For web browsers, it uses ReactDOM to translate the Virtual DOM changes into actual DOM operations.

// For other platforms (like mobile with React Native), different "renderers" are used to translate the Virtual DOM instructions into the native UI elements of that platform.

//// Data, State and Props ////

/// Keys

// The "key" prop is crucial for React because:
// - React's Reconciliation Process
// - Identifying Changes in Lists.
//   If the order changes, or if items are inserted or deleted in the middle of the list, React might:
//   - Re-render entire subtrees unnecessarily
//   - Incorrectly update component state
// - Maintaining Component State
//   When an item is reordered or a new item is inserted, if the "key" remains the same, React can recognize it as the same logical entity and preserve its internal state (like input values, scroll positions, or animation states)
// - Loss of State Without Keys
//   If you don't provide keys, React might treat reordered or newly inserted items as entirely new elements. This would cause the internal state of those "new" elements to be reset, leading to a poor user experience.

// What Makes a Good "key"?
// - Uniqueness
// - Stability

/// State VS Props

// Props;

// The origin of props is passed down from a parent component
// The mutability of props is Read-only (immutable)
// The control of of props is by the parent component
// The purpose of props is mostly for configuration, displaying data and communication.
// The scope of is external to the component

// State

// The origin of state is managed within the component itself
// The mutability of state is mutable within the component
// The control of state local to the component
// The purpose of state to manage internal data + triggering re-renders.
// The scope of state is internal to the component
