//// React State Notes

//// Table Of Content

//// - Asynchronous State Updates
//// - React State Storage
//// - State Structure
//// - Updating Nested Objects
//// - Updating Arrays
//// - Updating Array of Objects
//// - Simplifying Update Logic with Immer
//// - Sharing State between Components

//// - Keeping Components Pure
//// - React Strict Mode

//
//
//

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

//

//// - State Structure ////

// - Avoid redundant state variables.
// - Group related variables inside of an object
// - When using objects, DONT go for deeply nested structures and prefer to have a flat structure.

import { useState } from "React";

function TestApp() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    petsName: "",
    nationality: "",
    address: { city: "Miami", team: "dolphins" },
  });

  //// Updating Nested Objects ////

  // In React, you should treat objects and arrays in state as immutable (read-only) for several crucial reasons, even though JavaScript itself allows them to be mutable:
  // - Efficient Re-rendering (Reconciliation):

  // React uses a concept called the "Virtual DOM" and a process called "reconciliation" to efficiently update the actual DOM. When state or props change, React creates a new Virtual DOM tree and compares it to the previous one to identify what needs to be updated in the real DOM.

  // For primitive values (numbers, strings, booleans), React can easily compare them by value (===). If the value is different, it knows to re-render.
  // However, for objects and arrays, JavaScript compares them by reference. If you directly mutate an object or array in state (e.g., myArray.push(newItem) or myObject.property = newValue), the reference to that object/array remains the same. React's shallow comparison (using Object.is() or similar) would see the same reference and might mistakenly believe that nothing has changed, leading to your component not re-rendering even though the data has visually changed.

  // wrong
  const handleWrongObjectUpdate = () => {
    person.petsName = "Patico";
    setPerson(person);
  };

  // correct
  const handleCorrectObjectUpdate = () => {
    const newPerson = {
      ...person,
      petsName: "Patico",
    };
    setPerson(newPerson);
    // or since it's a simple object setPerson(...person, petsName: "Patico")
  };

  const handleCorrectNestedObjectUpdate = () => {
    setPerson({ ...person, address: { ...person.address, team: "heat" } });
  };

  //// Updating Arrays ////

  const [moods, setMoods] = useState(["focused", "sleepy", "hungry"]);
  // wrong
  const handleWrongArrayUpdate = () => {
    moods.push = "constipated";
    setMoods(moods);
  };

  // correct
  const handleCorrectArrayUpdate = () => {
    // add
    setMoods([...moods, "fulfillment"]);
    // remove
    setMoods(moods.filter((mood) => mood !== "constipated"));

    // updated
    setMoods(moods.map((mood) => (mood === "sleepy" ? "caffeinated" : mood)));
  };
}

//// Updating Array of Objects ////

interface Dog {
  id: number;
  name: string;
  cute: boolean;
  color: string;
}

const [dogs, setDogs] = useState<Dog[]>([
  { id: 1, name: "Pato", cute: true, color: "black" },
  { id: 2, name: "Lily", cute: true, color: "brown" },
]);

const handleArrayOfObjectsUpdate = () => {
  setDogs(
    dogs.map((dog) => (dog.id === 1 ? { ...dog, color: "balding" } : dog))
  );
};

//// Simplifying Update Logic with Immer ////

import produce from "immer";

const handleUpdateUsingImmer = () => {
  setDogs(
    produce<Dog[]>((draft) => {
      const dog = draft.find((dog) => dog.id === 1);
      if (dog) dog.name = "patico";
    })
  );
};
// the draft variable acts as a copy of the state's array.
// With that we're free to mutate / modify just like a regular JS object.

//// Sharing State between Components ////

//// - Keeping Components Pure ////

// Components should expect to work like a pure function.
// If we give it the same input/same props, it should always return the same jsx.
// Why? Performance reasons. If the inputs don't change, react skips the re-render.

// To keep components pure, we should keep changes out of the render phase. We should NOT change
// any object that existed before rendering.
// ITS FINE TO UPDATE an object that we create as part of rendering.

//// React Strict Mode ////

// When react strict mode is enabled, in development react renders each component twice and takes the result of the second render.
// The first render is primarily used for detecting and reporting potential issues to our code.
// The second render is used to actually update the UI.
