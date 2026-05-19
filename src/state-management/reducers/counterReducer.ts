// a reducer is a function that allows us to centralize the state management of our application. It takes the current state and an action, and returns a new state based on the action type and payload.

interface Action {
  type: "INCREMENT" | "RESET";
}

// by convention, we use an object with the type property that describes the action
const counterReducer = (state: number, action: Action): number => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "RESET") {
    return 0;
  }
  return state;
};

export default counterReducer;
