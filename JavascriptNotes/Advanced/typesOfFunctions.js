//// IFFY - Immediately Invoked Function Expression

// IFFY which stands for Immediately Invoked Function Expression, is a function expression in JavaScript that's executed as soon as it's defined.It's a powerful pattern for achieving several functionalities in your code.

// Structure:

// There are two common ways to write an IIFE:

// Function Expression with Parentheses:
// JavaScript
// (function () {
//   // Your code here
// })();
// Use code with caution.
// content_copy
// Arrow Function with Parentheses:
// JavaScript
// (() => {
//   // Your code here
// })();
// Use code with caution.
// content_copy
// In both cases, the parentheses around the function expression or arrow function cause it to be invoked immediately.

// Benefits of IFFEs:

// Private Scope: Variables and functions defined within an IIFE are not accessible from the outside scope. This prevents naming conflicts and promotes encapsulation.
// Module-like Behavior: IIFEs can mimic modules by creating a private scope for variables and functions, similar to how modules work in other languages.
// Controlling Namespace Pollution: By keeping variables and functions local to the IIFE, you avoid cluttering the global namespace, making your code cleaner and less prone to conflicts.
// Asynchronous Operations: IIFEs are commonly used to wrap asynchronous operations like setTimeout or network requests, ensuring the code within the IIFE executes only after the asynchronous operation completes.
// When to Use IFFEs:

// Creating Private Variables: If you need to define variables that should only be accessible within a specific part of your code, an IIFE is a good choice.
// Modular Code Blocks: IIFEs can be used to create self-contained code blocks that encapsulate functionality and prevent unintended side effects.
// Preventing Namespace Pollution: If you're working in a large codebase with multiple developers, IFFEs can help control the global namespace and avoid naming conflicts.
// Running Code Once: When you need to execute a specific piece of code only once during the program's execution, an IIFE can ensure it runs immediately upon definition.
// Here's an example of using an IIFE to create a private counter variable:

// JavaScript
// const counter = (function () {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// })();

// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2

// // count is not accessible outside the IIFE
// console.log(count); // ReferenceError: count is not defined
// Use code with caution.
// content_copy
// Alternatives to IFFEs:

// While IFFEs are a powerful tool, there are other approaches to achieve similar goals:

// Modules: In modern JavaScript, using export and import statements provides a more structured way to create modules with encapsulated code and clear dependencies.
// Let and Const: Using let and const for variable declarations within functions or blocks can achieve some degree of private scoping.