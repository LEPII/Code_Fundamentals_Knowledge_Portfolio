# React Context

> **Core Principle:** A context should only hold values that are closely related and tend to change together. (You don't want your context to be too fine grained either- like creating a context for both the value and the dispatch function)

## When to Use React Context

> **Core Rule:** A context should only hold values that are closely related and tend to change together.

### 1. Global or Shared State

Use it for data that needs to be accessed by **many** components at different nesting levels.
* **Examples:** Current authenticated user, UI themes (dark/light mode), language/locale settings, or global application configuration.

### 2. Avoiding Prop-Drilling
Use it when passing data through props becomes tedious because 3+ layers of intermediate components have to pass the prop down without actually using it themselves.

### 3. Compound Components
Use it to share implicit state between a parent component and its immediate children to create a cohesive UI unit.
* **Example:** A `<Tabs>` container sharing the active tab state with individual `<Tab>` components.

---

### When NOT to Use It (Alternatives)
Context is **not** a generic state management tool or a replacement for Redux/Zustand for complex state. 

* **For simple passing:** If only one component deep down needs the data, consider **Component Composition** (passing the component itself as a prop) instead of adding a context.
* **For high-frequency changes:** If values change multiple times per second (like mouse positions or fast form inputs), Context will cause performance bottlenecks due to widespread re-renders. Use local state or an external store.
