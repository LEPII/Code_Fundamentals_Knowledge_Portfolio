//// OBJECTS

// There are several ways to access properties and values of an object in JavaScript:

// 1. Dot notation:
// Use a dot (.) followed by the property name to access the value.

const person = {
  name: "Luis",
  age: 26,
};
console.log(person.name); // Output: Luis
console.log(person.age); // Output: 26

// 2. Bracket notation:
// Use square brackets ([]) with the property name as a string to access the value.
// This is especially useful when the property name is dynamic or contains special characters
const person2 = {
  name: "Luis",
  "favorite color": "Red",
};
console.log(person["name"]); // Output: Luis
console.log(person["favorite color"]); // Output: Red

// 3. Computed property names:
// Use square brackets with an expression inside to dynamically create property names.
const key = "age";
const person3 = {
  [key]: 26,
};
console.log(person.age); // Output: 30

// 4. Destructuring assignment:
// Extract properties from an object into variables using destructuring syntax.
const { name, age } = person3;
console.log(age); // Output: 26

// // // // // 
const person567 = {
  name: "Sam",
  age: 30,
};

// 5. Object.keys():
// Returns an array containing the names of all enumerable properties of an object.

const keys = Object.keys(person567);
console.log(keys); // Output: ["name", "age"]

// 6. Object.values():
// Returns an array containing the values of all enumerable properties of an object.

const values = Object.values(person567);
console.log(values); // Output: ["Sam", 30]

// 7. Object.entries():
// Returns an array of key-value pairs for all enumerable properties of an object.
const entries = Object.entries(person567);
console.log(entries); // Output: [["name", "Alice"], ["age", 30]]