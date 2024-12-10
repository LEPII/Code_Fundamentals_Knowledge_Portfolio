//// Function Declaration vs Expression

// Function Declaration
function talk() {}

// Named Function Expression
let talking = function talk() {
  console.log("talk");
};

// Anonymous Function Expression
let screaming = function () {
  console.log("screaming");
};
let scream = screaming; // both variables are referencing the same function.
screaming();

//// Hoisting

// With Function Declaration, you can call the function before it's initialized.
// - Why? - Hoisting - The JS engine when running the code, will move function declaration to the top.

// With Function Expressions, you will get an an error if the function is called before it's initialized.

//// Arguments

// The Argument Object

// Every function has a special object called arguments.

// The arguments object in JavaScript is a special object that provides access to the values of the arguments passed to a function. It's an array-like object, meaning you can access individual arguments using zero-based indexing.

// However, it's important to note that arguments is not a true array. It lacks some of the methods and properties of the Array prototype.

function theSum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(1, 2, 3, 4);
// Output = 10

//// Rest Parameters

//The rest parameter must be the last parameter in a function declaration.

// Spread vs Rest Parameter

// So, the spread operator SPREADS individual elements from an array or object, while the rest operator GATHERS multiple elements into a single array.

const restOperator = (...args) => {
  return args.reduce((a, b) => a + b);
};

console.log(restOperator(1, 2, 3, 4, 5));
//...args outputs: [1, 2, 3, 4, 5]
//the function outputs: 25

// Example - You have a shopping cart filled with items + a discount:

const shoppingCart = (discount, ...prices) => {
  let total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
};

console.log(restOperator(0.1, 40, 50));

//// Default Parameters

// If you leave certain parameters out when calling a function,
// you can set default parameter values

function defaultParams(default1, default2, default3) {
  default1 = default1 || 0;
  default2 = default2 || 10;
  default3 = default3 || null;
  return ((default1 * default2) / 100) * default3;
}

// OR ES6 SYNTAX

function defaultParams(default1 = 0, default2 = 10, default3 = null) {
  return ((default1 * default2) / 100) * default3;
}

//// GETTERS AND SETTERS

const id = {
  firstName: "Lui",
  lastName: "P",
  fullName() {
    return `${id.firstName} ${id.firstName}`;
  },
};

console.log(id.fullName());

// Cons to this approach
// - property is read only. Cannot change the full name from the outside.
// - You would have to use it as a method and not a property

// This is where getters and setters come in
// - getters => access properties
// - setters => change (mutate) them

const setterAndGetterId = {
  firstName: "Lui",
  lastName: "P",
  get fullName() {
    return `${setterAndGetterId.firstName} ${setterAndGetterId.firstName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

setterAndGetterId.fullName("Luis Perez");
console.log(setterAndGetterId.fullName);

//// Try And Catch

// Defensive Programming

// Defensive programming is a programming technique that anticipates and handles potential errors or unexpected input to prevent crashes or security vulnerabilities. It's like building a fortress around your code, anticipating attacks and preparing defenses.

// Key techniques of defensive programming:

// Input validation: Check all input values for validity and range before processing them.
// Error handling: Implement robust error handling mechanisms to gracefully handle exceptions and unexpected situations.
// Assertions: Use assertions to check assumptions about the state of the program at specific points.
// Boundary condition testing: Test your code with extreme values and edge cases to ensure it handles them correctly.
// Security considerations: Protect against common security vulnerabilities like SQL injection and cross-site scripting.
// Documentation: Write clear and concise documentation to help future developers understand and maintain the code.

// - Try/Catch Block

// A try/catch block is a mechanism in programming languages to handle exceptions gracefully. It allows you to anticipate potential errors and take appropriate actions without causing the entire program to crash.

// Try Block:
// The code that might potentially throw an exception is placed inside the try block.

// Catch Block:
// If an exception is thrown within the try block, the control is transferred to the catch block.
// The catch block can handle the exception, log an error message, or take other corrective actions.

const tryCatch = {
  firstName: "Lui",
  lastName: "P",
  get fullName() {
    return `${tryCatch.firstName} ${tryCatch.firstName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string");
    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  tryCatch.fullName = null;
} catch (e) {
  console.log(e);
}

console.log(tryCatch);
